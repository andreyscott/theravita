"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { FEATURED } from "@/lib/content";

export function Featured() {
  const track = useRef<HTMLUListElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section id="stories" className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-deep-emerald/30 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <Reveal>
            <p className="t-eyebrow mb-5 flex items-center gap-3 text-tv-green">
              <span className="h-px w-8 bg-tv-green" /> Featured intelligence
            </p>
            <h2 className="t-h2 text-ivory">
              Latest <span className="serif-italic text-tv-green">stories</span>.
            </h2>
            <p className="prose-col mt-5 text-ivory/70">
              Explore the latest thinking, stories, investigations and conversations from TheraVita Intelligence.
            </p>
            <Link href="/stories" className="group mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-tv-green">
              Explore all stories
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
          <div className="hidden gap-2 md:flex">
            {[-1, 1].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => scroll(d as 1 | -1)}
                aria-label={d === -1 ? "Previous stories" : "Next stories"}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-ivory transition duration-300 hover:border-tv-green hover:bg-tv-green hover:shadow-glow"
              >
                {d === -1 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ul
        ref={track}
        className="no-scrollbar relative flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-6 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        aria-label="Featured intelligence"
      >
        {FEATURED.map((a, i) => (
          <li key={a.title} className="w-[82vw] shrink-0 snap-start sm:w-[22rem] lg:w-[23.5rem]">
            <Reveal delay={Math.min(i * 0.08, 0.3)} className="h-full">
              <Link
                href="/stories"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-transparent bg-sage text-deep-green shadow-[0_20px_40px_-24px_rgb(0_0_0/0.8)] transition duration-300 hover:-translate-y-2 hover:border-tv-green hover:shadow-[0_30px_50px_-20px_rgb(47_158_75/0.45)] focus-visible:-translate-y-2 focus-visible:border-tv-green"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.alt}
                    fill
                    sizes="(min-width:1024px) 376px, (min-width:640px) 352px, 82vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="t-eyebrow text-[0.68rem] text-deep-emerald">{a.tag}</p>
                  <p className="mt-3 font-serif text-[1.3rem] font-medium leading-snug">{a.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-deep-emerald">
                    Read more
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        ))}
        <li className="w-px shrink-0 lg:w-8" aria-hidden="true" />
      </ul>
    </section>
  );
}
