import Link from "next/link";
import { Logo } from "./Logo";
import { DISCLAIMER, FOOTER_LINKS, LENSES, NAV_LINKS } from "@/lib/content";

const link = "inline-flex min-h-11 items-center text-sm transition-colors hover:text-tv-green";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep-green text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.5fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="serif-italic mt-5 text-xl text-ivory/90">Healthcare. Understood.</p>
          <p className="mt-3 text-sm text-ivory/60">A TheraVita Global company</p>
        </div>

        <nav aria-label="Five lenses">
          <h2 className="t-eyebrow mb-3 text-gold">Five lenses</h2>
          <ul>
            {LENSES.map((l) => (
              <li key={l.key}>
                <Link href={`/explore#${l.key}`} className={link}>{l.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Site">
          <h2 className="t-eyebrow mb-3 text-gold">Intelligence</h2>
          <ul>
            {NAV_LINKS.filter((l) => l.href !== "/" && l.href !== "/explore").map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={link}>{l.label.charAt(0) + l.label.slice(1).toLowerCase()}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="t-eyebrow mb-3 text-gold">TheraVita</h2>
          <ul>
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={link}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="t-eyebrow mb-4 text-gold">Disclaimer</h2>
          <p className="text-[0.85rem] leading-relaxed text-ivory/65">{DISCLAIMER}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-ivory/60 sm:px-8">
          © 2026 TheraVita Global. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
