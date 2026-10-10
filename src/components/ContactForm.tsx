"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { CONTACT_TOPICS } from "@/lib/content";

type Errors = Partial<Record<"name" | "email" | "phone" | "topic" | "message", string>>;

const field =
  "w-full min-h-12 rounded-xl border border-deep-green/20 bg-white px-4 py-3 text-base text-charcoal placeholder:text-charcoal/40 transition focus:border-tv-green focus:outline-none focus:ring-4 focus:ring-tv-green/20 aria-[invalid=true]:border-red-600";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");
  const started = useRef(0);
  const topicRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    started.current = Date.now();
    const t = new URLSearchParams(window.location.search).get("topic");
    if (t && topicRef.current && CONTACT_TOPICS.some((c) => c.value === t)) topicRef.current.value = t;
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    setErrors({});
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone"),
          topic: fd.get("topic"),
          message: fd.get("message"),
          website: fd.get("website"),
          elapsed: Date.now() - started.current,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("done");
        return;
      }
      setErrors(data.errors ?? {});
      setMessage(data.error ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-3xl border border-tv-green/40 bg-white p-10 text-center shadow-card">
        <CheckCircle2 className="mx-auto text-tv-green" size={44} aria-hidden="true" />
        <h3 className="mt-4 font-serif text-3xl text-deep-green">Thank you.</h3>
        <p className="mt-2 text-charcoal/75">Your message has been sent. We&apos;ll be in touch.</p>
      </div>
    );
  }

  const label = "mb-2 block text-sm font-semibold text-deep-green";
  const err = (k: keyof Errors) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm text-red-700">{errors[k]}</p> : null;
  const a = (k: keyof Errors) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-3xl border border-deep-green/10 bg-ivory p-6 shadow-card sm:p-10">
      {/* Honeypot — hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" required maxLength={120} autoComplete="name" className={field} {...a("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" inputMode="email" className={field} {...a("email")} />
          {err("email")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={label}>Phone / WhatsApp <span className="font-normal text-charcoal/50">(optional)</span></label>
          <input id="phone" name="phone" type="tel" maxLength={30} autoComplete="tel" inputMode="tel" className={field} {...a("phone")} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="topic" className={label}>What is your enquiry about?</label>
          <select id="topic" name="topic" ref={topicRef} defaultValue="general" className={field} {...a("topic")}>
            {CONTACT_TOPICS.map((t) => (<option key={t.value} value={t.value}>{t.label}</option>))}
          </select>
          {err("topic")}
        </div>
      </div>

      <div>
        <label htmlFor="msg" className={label}>Message</label>
        <textarea id="msg" name="message" required rows={6} maxLength={4000} className={`${field} resize-y`} {...a("message")} />
        {err("message")}
      </div>

      <p className="text-xs text-charcoal/60">
        Please don&apos;t share personal medical details. We can&apos;t diagnose or give medical advice.
      </p>

      <div aria-live="polite" className="min-h-5 text-sm text-red-700">{status === "error" && message}</div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex min-h-14 items-center justify-center gap-2 justify-self-start rounded-full bg-tv-green px-9 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-glow disabled:opacity-70"
      >
        {status === "sending" ? (<><Loader2 className="animate-spin" size={18} aria-hidden="true" /> Sending…</>) : (<>Send Message <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" /></>)}
      </button>
    </form>
  );
}
