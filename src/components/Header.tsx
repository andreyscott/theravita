"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ASK_HREF, NAV_LINKS } from "@/lib/content";

const MotionLink = motion.create(Link);

export function AskButton({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <MotionLink
      href={ASK_HREF}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-tv-green px-6 py-2.5 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-glow focus-visible:shadow-glow ${className}`}
    >
      Ask TheraVita <ArrowRight aria-hidden="true" size={16} />
    </MotionLink>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open; Esc closes
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-deep-green/85 shadow-[0_1px_0_rgb(255_255_255/0.08),0_12px_32px_-16px_rgb(0_0_0/0.6)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-20">
        <Link href="/" aria-label="TheraVita home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="group relative inline-flex min-h-11 items-center px-3 text-[0.78rem] font-semibold tracking-[0.14em] text-ivory/80 transition-colors hover:text-white aria-[current=page]:text-white"
                >
                  {l.label}
                  <span className="absolute inset-x-3 bottom-2 h-px origin-left scale-x-0 bg-tv-green transition-transform duration-300 group-hover:scale-x-100 group-aria-[current=page]:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <AskButton className="hidden sm:inline-flex" />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-ivory transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4.5rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto lg:hidden"
          >
            <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 pb-10 pt-4 sm:px-8">
              <ul className="divide-y divide-white/10">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(l.href) ? "page" : undefined}
                      className="flex min-h-14 items-center justify-between text-lg font-medium tracking-wide text-ivory active:text-tv-green aria-[current=page]:text-tv-green"
                    >
                      {l.label}
                      <ArrowRight size={18} className="text-tv-green" aria-hidden="true" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <AskButton className="mt-8 w-full !min-h-14 text-base" onClick={() => setOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
