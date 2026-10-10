import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { LENSES, STORY_STREAMS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stories & Insights",
  description: "The healthcare story is rarely as simple as the headline. Explore the people, systems, evidence and ideas behind healthcare.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHero eyebrow="Stories & Insights" title="Look" accent="deeper.">
        <p>The healthcare story is rarely as simple as the headline.</p>
        <p>Our stories explore the people, systems, evidence, ideas and experiences behind healthcare.</p>
      </PageHero>

      <Section tone="charcoal">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STORY_STREAMS.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-transparent bg-sage text-deep-green shadow-[0_20px_40px_-24px_rgb(0_0_0/0.8)] transition duration-300 hover:-translate-y-2 hover:border-tv-green hover:shadow-[0_30px_50px_-20px_rgb(47_158_75/0.45)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={s.image} alt={s.alt} fill sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h2 className="t-eyebrow text-deep-emerald">{s.title}</h2>
                    <p className="mt-3 font-serif text-xl leading-snug">{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="browse" tone="ivory" eyebrow="Explore the latest" title="Browse our intelligence" accent="by lens.">
        <ul className="flex flex-wrap gap-3">
          {LENSES.map((l) => (
            <li key={l.key}>
              <Link href={`/explore#${l.key}`} className="inline-flex min-h-12 items-center rounded-full border border-deep-green/15 bg-white px-7 text-sm font-semibold text-deep-green transition duration-300 hover:-translate-y-0.5 hover:border-tv-green hover:bg-tv-green hover:text-white hover:shadow-glow">
                {l.title}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
