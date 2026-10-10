import { NextResponse } from "next/server";
import { CONTACT_TOPICS } from "@/lib/content";

/**
 * Contact endpoint hardening:
 *  - same-origin check (CSRF), JSON only, body size cap
 *  - strict server-side validation + control-char stripping
 *  - honeypot + minimum fill-time (silently accepted so bots learn nothing)
 *  - per-IP rate limit (in-memory: per server instance — use Redis/Upstash when scaling out)
 *  - delivery via CONTACT_WEBHOOK_URL (never exposes it to the client)
 */

const MAX_BODY = 8_000;
const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

const TOPICS = new Set<string>(CONTACT_TOPICS.map((t) => t.value));
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+\d][\d\s()-]{5,24}$/;

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, max) : "";

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5_000) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

const json = (body: object, status = 200) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (!origin || !host || new URL(origin).host !== host) return json({ error: "Forbidden" }, 403);
  if (!req.headers.get("content-type")?.includes("application/json")) return json({ error: "Unsupported" }, 415);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return json({ error: "Too many requests. Please try again later." }, 429);

  const raw = await req.text();
  if (raw.length > MAX_BODY) return json({ error: "Message too large." }, 413);

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(raw);
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Bot traps — pretend success.
  const elapsed = Number(data.elapsed);
  if (clean(data.website, 200) !== "" || !Number.isFinite(elapsed) || elapsed < 2_500) return json({ ok: true });

  const name = clean(data.name, 120);
  const email = clean(data.email, 200);
  const phone = clean(data.phone, 30);
  const topic = clean(data.topic, 30);
  const message = clean(data.message, 4_000);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL.test(email)) errors.email = "Please enter a valid email address.";
  if (phone && !PHONE.test(phone)) errors.phone = "Please enter a valid phone number.";
  if (!TOPICS.has(topic)) errors.topic = "Please choose a topic.";
  if (message.length < 10) errors.message = "Please write a little more (at least 10 characters).";
  if (Object.keys(errors).length) return json({ error: "Please check the highlighted fields.", errors }, 422);

  const payload = { name, email, phone, topic, message, receivedAt: new Date().toISOString() };
  const hook = process.env.CONTACT_WEBHOOK_URL;

  if (!hook) {
    if (process.env.NODE_ENV === "production") {
      console.error("CONTACT_WEBHOOK_URL is not configured; contact submission could not be delivered.");
      return json({ error: "Messaging is temporarily unavailable. Please try again later." }, 503);
    }
    console.info("[contact:dev]", payload);
    return json({ ok: true });
  }

  try {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) throw new Error(`webhook ${res.status}`);
    return json({ ok: true });
  } catch (e) {
    console.error("Contact delivery failed", e);
    return json({ error: "We couldn't send your message. Please try again." }, 502);
  }
}
