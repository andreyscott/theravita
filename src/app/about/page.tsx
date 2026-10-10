import type { Metadata } from "next";
import { PageHero, Section, CardGrid, Questions, StatementStack, CTABand, Button, TextLink } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "TheraVita Intelligence exists to help people understand what is happening in healthcare, why it matters and what questions to ask.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About TheraVita Intelligence" title="Healthcare." accent="Understood." image="/images/hero-portrait.jpg">
        <p>Healthcare is one of the most important parts of human life. Yet for many people, healthcare remains difficult to understand.</p>
      </PageHero>

      <Section tone="ivory" title="Too much information," accent="not enough context.">
        <div className="grid gap-12 lg:grid-cols-2">
          <Questions
            items={[
              "Questions about symptoms.",
              "Questions about treatment.",
              "Questions about hospitals.",
              "Questions about cost.",
              "Questions about doctors.",
              "Questions about technology.",
              "Questions about what happens next.",
            ]}
          />
          <Reveal className="prose-col space-y-5 text-charcoal/80 t-lead">
            <p>And often, there is simply too much information — but not enough context.</p>
            <p className="font-semibold text-deep-green">TheraVita Intelligence exists to change that.</p>
            <p>We explore healthcare through evidence, expert knowledge, investigation, storytelling and conversation.</p>
            <p>
              Our goal is not simply to tell people what to think. It is to help people understand what is happening, why
              it matters and what questions they should be asking.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" eyebrow="What makes us different?" title="We are not another" accent="health-tip platform."
        intro={<p>We are interested in the space between information and understanding.</p>}>
        <p className="t-eyebrow mb-6 text-gold">We ask</p>
        <Questions tone="dark" items={["Why does this happen?", "How does the system work?", "Who is affected?", "What does the evidence say?", "What are people experiencing?", "What is changing?", "What could be done differently?"]} />
      </Section>

      <Section tone="sage" eyebrow="What we believe" title="Six things" accent="we hold to.">
        <CardGrid
          items={[
            { num: "01", title: "Understanding matters.", body: "People make better decisions when they have access to understandable, trustworthy information." },
            { num: "02", title: "Context matters.", body: "A health fact without context can leave people with more questions than answers." },
            { num: "03", title: "People matter.", body: "Healthcare is experienced by human beings, not statistics alone." },
            { num: "04", title: "Evidence matters.", body: "Healthcare communication should be grounded in credible evidence and transparent sourcing." },
            { num: "05", title: "Africa matters.", body: "Africa should not merely consume global healthcare conversations. African experiences, ideas and innovations should help shape them." },
            { num: "06", title: "Conversation matters.", body: "Some of the most important healthcare questions are discovered by listening to people." },
          ]}
        />
      </Section>

      <Section tone="ivory" eyebrow="Our five lenses" title="Five ways of" accent="seeing healthcare.">
        <CardGrid
          items={[
            { icon: "heart", title: "Health", body: "Understanding the science and experiences of health.", href: "/explore#health" },
            { icon: "building", title: "Healthcare", body: "Understanding the systems through which care is delivered.", href: "/explore#healthcare" },
            { icon: "users", title: "People", body: "Understanding the humans inside the healthcare story.", href: "/explore#people" },
            { icon: "cpu", title: "The Future", body: "Understanding the technologies and ideas reshaping healthcare.", href: "/explore#future" },
            { icon: "globe", title: "Society", body: "Understanding the wider forces influencing health and healthcare.", href: "/explore#society" },
          ]}
        />
      </Section>

      <Section tone="charcoal" eyebrow="Part of something bigger" title="Trust first. Intelligence next." accent="Infrastructure follows.">
        <Reveal className="prose-col space-y-4 text-ivory/80 t-lead">
          <p>TheraVita Intelligence is the public intelligence and community layer of TheraVita Global.</p>
          <p>TheraVita Global is building toward a broader healthcare intelligence and technology ecosystem.</p>
          <p>We begin with understanding. We build trust through useful work. And we learn from the communities we serve.</p>
          <TextLink href="/global" className="text-tv-green">Learn more about TheraVita Global</TextLink>
        </Reveal>
      </Section>

      <Section tone="dark" eyebrow="Join us">
        <StatementStack lines={["Read.", "Question.", "Challenge.", "Contribute.", "Connect."]} />
        <Reveal className="mt-10">
          <p className="mb-6 max-w-xl text-ivory/80 t-lead">Healthcare is too important not to understand.</p>
          <Button href="/community">Join the TheraVita Community</Button>
        </Reveal>
      </Section>
      <CTABand title="Look deeper." body={<p>Explore the five lenses and the stories behind the headlines.</p>} label="Explore Intelligence" href="/explore" />
    </>
  );
}
