import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { LENSES } from "@/lib/content";

export function Lenses() {
  return (
    <section id="explore" className="relative bg-gradient-to-b from-ivory to-[#eef0e6] pb-24 pt-8 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="t-eyebrow mb-5 flex items-center gap-3 text-deep-emerald">
              <span className="h-px w-8 bg-tv-green" /> What we explore
            </p>
            <h2 className="t-h2 max-w-xl text-deep-green">
              Five lenses. A <span className="serif-italic text-deep-emerald">deeper</span> understanding.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="prose-col text-charcoal/75">
            <p>
              Healthcare is more than symptoms and treatment. We explore the bigger picture — from science and systems
              to people, technology and society.
            </p>
            <Link
              href="/explore"
              className="group mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-deep-emerald"
            >
              Explore all topics
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {LENSES.map((l, i) => (
            <li key={l.key} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <Reveal delay={i * 0.08} className="h-full">
                <Link
                  href={`/explore#${l.key}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-deep-green/10 bg-white shadow-card transition duration-300 hover:-translate-y-2 hover:border-tv-green/60 hover:shadow-card-hover focus-visible:-translate-y-2 focus-visible:border-tv-green"
                >
                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/3]">
                    <Image
                      src={l.image}
                      alt={l.alt}
                      fill
                      sizes="(min-width:1024px) 20vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-green/50 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2.5 text-deep-emerald">
                      <Icon name={l.icon} size={22} />
                      <h3 className="t-h3 text-deep-green">{l.title}</h3>
                    </div>
                    <p className="pt-2 text-[0.92rem] font-medium leading-snug text-deep-green/90">{l.short}</p>
                    {/* Always visible on touch/small screens; revealed on hover/focus on desktop */}
                    <div className="grid grid-rows-[1fr] transition-all duration-500 lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-focus-visible:grid-rows-[1fr]">
                      <p className="overflow-hidden pt-2 text-[0.88rem] leading-relaxed text-charcoal/70 lg:opacity-0 lg:transition-opacity lg:duration-500 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                        {l.note}
                      </p>
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[0.82rem] font-semibold text-deep-emerald">
                      {l.cta}
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
