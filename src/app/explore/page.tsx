import type { Metadata } from "next";
import { PageHero, Section, SplitImage, Chips, Questions, CardGrid, CTABand, Button, tone } from "@/components/ui";
import { LENSES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Explore Intelligence",
  description: "Five ways of understanding healthcare: Health, Healthcare, People, The Future and Society.",
};

type Detail = {
  headline: string;
  body: readonly string[];
  chips?: readonly string[];
  chipsLabel?: string;
  questions?: readonly string[];
  statements?: readonly string[];
};

export default function ExplorePage() {
  return (
    <>
      <PageHero eyebrow="Explore Intelligence" title="Five ways of understanding" accent="healthcare.">
        <p>Healthcare does not exist in one category. It exists across science, systems, people, technology, economics, culture and society.</p>
        <p>TheraVita Intelligence explores healthcare through five interconnected lenses.</p>
      </PageHero>

      {LENSES.map((l, i) => {
        const d = l.detail as Detail;
        const t = i % 2 === 0 ? "ivory" : "sage";
        const s = tone(t);
        return (
          <Section key={l.key} id={l.key} tone={t} className="scroll-mt-20">
            <SplitImage image={l.image} alt={l.alt} flip={i % 2 === 1}>
              <p className="serif-italic mb-3 text-4xl text-tv-green">{l.num}</p>
              <p className="t-eyebrow mb-4 text-deep-emerald">{l.title}</p>
              <h2 className={`t-h2 ${s.h}`}>{d.headline}</h2>
              <div className="mt-6 space-y-5">
                {d.questions && <Questions items={d.questions} tone={t} />}
                {d.statements && (
                  <ul className="space-y-1">
                    {d.statements.map((x) => (
                      <li key={x} className="border-l-2 border-tv-green pl-4 text-deep-green">{x}</li>
                    ))}
                  </ul>
                )}
                {d.body.map((b) => (
                  <p key={b} className={`prose-col t-lead ${s.p}`}>{b}</p>
                ))}
                {d.chips && (
                  <div>
                    {d.chipsLabel && <p className="t-eyebrow mb-3 text-charcoal/60">{d.chipsLabel}</p>}
                    <Chips items={d.chips} tone={t} />
                  </div>
                )}
              </div>
              <div className="mt-8">
                <Button href="/stories" variant="primary">{l.cta}</Button>
              </div>
            </SplitImage>
          </Section>
        );
      })}

      <Section tone="dark" eyebrow="Explore deeper" title="Our intelligence is delivered through" accent="different formats.">
        <CardGrid
          tone="dark"
          items={[
            { icon: "book", title: "Explainers", body: "Complex healthcare ideas made understandable." },
            { icon: "search", title: "Investigations", body: "Questions examined beyond the obvious." },
            { icon: "mic", title: "Expert Conversations", body: "Direct conversations with people who understand healthcare from experience and expertise." },
            { icon: "news", title: "Features", body: "Longer stories exploring people, systems and ideas." },
            { icon: "message", title: "Perspectives", body: "Thoughtful viewpoints on important healthcare questions." },
            { icon: "users", title: "Stories", body: "Human experiences that help us see healthcare differently." },
          ]}
        />
      </Section>
      <CTABand title="Start exploring." label="View Latest Intelligence" href="/stories" />
    </>
  );
}
