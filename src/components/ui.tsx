import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Icon, type IconName } from "./Icon";

export type Tone = "ivory" | "sage" | "dark" | "charcoal";

const T: Record<Tone, { bg: string; h: string; p: string; eye: string; acc: string; card: string; ch: string; cp: string; link: string; chip: string }> = {
  ivory: {
    bg: "bg-ivory", h: "text-deep-green", p: "text-charcoal/80", eye: "text-deep-emerald", acc: "text-deep-emerald",
    card: "border-deep-green/10 bg-white/80 shadow-card hover:border-tv-green/60 hover:shadow-card-hover",
    ch: "text-deep-green", cp: "text-charcoal/70", link: "text-deep-emerald",
    chip: "border-deep-green/15 bg-white text-deep-green",
  },
  sage: {
    bg: "bg-sage/70", h: "text-deep-green", p: "text-charcoal/80", eye: "text-deep-emerald", acc: "text-deep-emerald",
    card: "border-deep-green/10 bg-ivory/90 shadow-card hover:border-tv-green/60 hover:shadow-card-hover",
    ch: "text-deep-green", cp: "text-charcoal/70", link: "text-deep-emerald",
    chip: "border-deep-green/15 bg-ivory text-deep-green",
  },
  dark: {
    bg: "bg-deep-green", h: "text-ivory", p: "text-ivory/80", eye: "text-tv-green", acc: "text-tv-green",
    card: "glass hover:border-tv-green/60 hover:bg-white/10 hover:shadow-[0_24px_48px_-20px_rgb(47_158_75/0.45)]",
    ch: "text-ivory", cp: "text-ivory/70", link: "text-tv-green",
    chip: "border-white/15 bg-white/5 text-ivory",
  },
  charcoal: {
    bg: "bg-charcoal", h: "text-ivory", p: "text-ivory/80", eye: "text-tv-green", acc: "text-tv-green",
    card: "border-white/10 bg-white/[0.04] hover:border-tv-green/60 hover:bg-white/[0.07] hover:shadow-[0_24px_48px_-20px_rgb(47_158_75/0.4)]",
    ch: "text-ivory", cp: "text-ivory/70", link: "text-tv-green",
    chip: "border-white/15 bg-white/5 text-ivory",
  },
};

export const tone = (t: Tone) => T[t];

/* ── Buttons / links ── */
export function Button({
  href, children, variant = "primary", className = "",
}: { href: string; children: ReactNode; variant?: "primary" | "ghost" | "gold"; className?: string }) {
  const v = {
    primary: "bg-tv-green text-white hover:shadow-glow",
    ghost: "glass text-ivory hover:bg-white/15",
    gold: "bg-gold text-charcoal hover:shadow-[0_8px_32px_-4px_rgb(185_154_91/0.6)]",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${v} ${className}`}
    >
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`group inline-flex min-h-11 items-center gap-2 text-sm font-semibold ${className}`}>
      {children}
      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function Eyebrow({ children, className = "text-tv-green" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`t-eyebrow mb-5 flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-current opacity-70" /> {children}
    </p>
  );
}

/* ── Page hero (inner pages) ── */
export function PageHero({
  eyebrow, title, accent, children, image = "/images/hero-leaf.jpg", actions,
}: { eyebrow: string; title: string; accent?: string; children?: ReactNode; image?: string; actions?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-deep-green pb-20 pt-36 sm:pb-28 sm:pt-44">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover object-right opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep-green via-deep-green/85 to-deep-green/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep-green via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal y={20} className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="t-h1 text-ivory">
            {title}
            {accent && (
              <>
                {" "}
                <span className="serif-italic bg-gradient-to-r from-[#9be08a] to-tv-green bg-clip-text text-transparent">{accent}</span>
              </>
            )}
          </h1>
          {children && <div className="prose-col mt-7 space-y-4 text-ivory/85 t-lead">{children}</div>}
          {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
        </Reveal>
      </div>
    </section>
  );
}

/* ── Section wrapper ── */
export function Section({
  id, tone: t = "ivory", eyebrow, title, accent, intro, children, className = "",
}: {
  id?: string; tone?: Tone; eyebrow?: string; title?: string; accent?: string; intro?: ReactNode; children?: ReactNode; className?: string;
}) {
  const s = T[t];
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${s.bg} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {(eyebrow || title || intro) && (
          <Reveal className="mb-12 max-w-3xl">
            {eyebrow && <Eyebrow className={s.eye}>{eyebrow}</Eyebrow>}
            {title && (
              <h2 className={`t-h2 ${s.h}`}>
                {title}
                {accent && <> <span className={`serif-italic ${s.acc}`}>{accent}</span></>}
              </h2>
            )}
            {intro && <div className={`prose-col mt-6 space-y-4 t-lead ${s.p}`}>{intro}</div>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

/* ── Card grid ── */
export type CardItem = { title: string; body?: string; num?: string; icon?: IconName; href?: string };

export function CardGrid({ items, tone: t = "ivory", cols = 3 }: { items: readonly CardItem[]; tone?: Tone; cols?: 2 | 3 }) {
  const s = T[t];
  const grid = cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`grid gap-5 ${grid}`}>
      {items.map((c, i) => {
        const inner = (
          <>
            {c.icon && (
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-tv-green/15 text-tv-green transition-colors duration-300 group-hover:bg-tv-green group-hover:text-white">
                <Icon name={c.icon} size={24} />
              </span>
            )}
            {c.num && <span className="serif-italic mb-4 block text-3xl text-tv-green">{c.num}</span>}
            <h3 className={`t-h3 ${s.ch}`}>{c.title}</h3>
            {c.body && <p className={`mt-3 text-[0.97rem] leading-relaxed ${s.cp}`}>{c.body}</p>}
          </>
        );
        const cls = `group flex h-full flex-col rounded-2xl border p-7 transition duration-300 hover:-translate-y-1.5 ${s.card}`;
        return (
          <li key={c.title}>
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              {c.href ? <Link href={c.href} className={cls}>{inner}</Link> : <div className={cls}>{inner}</div>}
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}

/* ── Chips ── */
export function Chips({ items, tone: t = "ivory" }: { items: readonly string[]; tone?: Tone }) {
  const s = T[t];
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((c, i) => (
        <li key={c}>
          <Reveal delay={Math.min(i * 0.04, 0.4)} y={14}>
            <span className={`inline-flex min-h-10 items-center rounded-full border px-5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:border-tv-green ${s.chip}`}>
              {c}
            </span>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/* ── Question list ── */
export function Questions({ items, tone: t = "ivory" }: { items: readonly string[]; tone?: Tone }) {
  const s = T[t];
  return (
    <ul className="space-y-3">
      {items.map((q, i) => (
        <li key={q}>
          <Reveal delay={Math.min(i * 0.06, 0.4)} y={16}>
            <p className={`border-l-2 border-tv-green py-1 pl-5 font-serif text-xl italic leading-snug sm:text-2xl ${s.ch}`}>{q}</p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/* ── Big stacked statements ("Read. Question. Challenge.") ── */
export function StatementStack({ lines, tone: t = "dark" }: { lines: readonly string[]; tone?: Tone }) {
  const s = T[t];
  return (
    <ul>
      {lines.map((l, i) => (
        <li key={l}>
          <Reveal delay={i * 0.07} y={24}>
            <p className={`serif-italic text-[clamp(2rem,1.2rem+3.5vw,3.75rem)] leading-[1.15] ${i === lines.length - 1 ? s.acc : s.h}`}>{l}</p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/* ── "Do not send" list ── */
export function CrossList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((x, i) => (
        <li key={x}>
          <Reveal delay={(i % 2) * 0.08} y={14}>
            <p className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-ivory/85">
              <X size={18} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
              {x}
            </p>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/* ── Closing CTA band ── */
export function CTABand({
  title, body, label, href, variant = "primary", secondary,
}: { title: string; body?: ReactNode; label: string; href: string; variant?: "primary" | "gold"; secondary?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep-emerald via-deep-green to-deep-green py-20 sm:py-24">
      <span aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-tv-green/25 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
        <Reveal className="max-w-2xl">
          <h2 className="t-h2 serif-italic text-ivory">{title}</h2>
          {body && <div className="prose-col mt-5 text-ivory/80 t-lead">{body}</div>}
        </Reveal>
        <Reveal delay={0.1} className="flex flex-wrap gap-3">
          <Button href={href} variant={variant}>{label}</Button>
          {secondary}
        </Reveal>
      </div>
    </section>
  );
}

/* ── Two column: copy + image ── */
export function SplitImage({ image, alt, children, flip = false }: { image: string; alt: string; children: ReactNode; flip?: boolean }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
          <Image src={image} alt={alt} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-green/40 to-transparent" />
        </div>
      </Reveal>
      <Reveal delay={0.1}>{children}</Reveal>
    </div>
  );
}
