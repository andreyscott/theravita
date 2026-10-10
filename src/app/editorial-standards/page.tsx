import type { Metadata } from "next";
import { PageHero, Section, CardGrid, Chips } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Editorial Standards",
  description: "Trust is earned. Our ten editorial principles, sources, contributor policy and commitment.",
};

const PRINCIPLES = [
  { num: "01", title: "Accuracy", body: "We seek to ensure that factual claims are supported by credible evidence and appropriate sources." },
  { num: "02", title: "Transparency", body: "Where appropriate, we identify our sources, contributors, affiliations and relevant interests." },
  { num: "03", title: "Context", body: "We do not believe that presenting a fact without context necessarily creates understanding. We aim to explain the circumstances, evidence and limitations surrounding important claims." },
  { num: "04", title: "Uncertainty", body: "Science evolves. Where evidence is uncertain, developing or contested, we aim to communicate that uncertainty rather than present speculation as established fact." },
  { num: "05", title: "Independence", body: "Editorial content should not be disguised advertising. Commercial relationships will not automatically determine editorial conclusions." },
  { num: "06", title: "Expertise", body: "Where specialist knowledge is required, we seek input from appropriately qualified professionals or authoritative sources." },
  { num: "07", title: "Respect", body: "We treat patients, professionals, communities and institutions with dignity. We avoid unnecessary sensationalism, stigma and fear-based communication." },
  { num: "08", title: "Corrections", body: "When we identify a significant factual error, we will seek to correct it transparently." },
  { num: "09", title: "Privacy", body: "We respect the privacy of individuals whose stories or experiences are shared through our platform. We will seek appropriate permission before publishing personally identifiable information or sensitive personal stories." },
  { num: "10", title: "No personal diagnosis", body: "TheraVita Intelligence does not diagnose individuals through editorial content, community conversations or submitted questions. Our purpose is to improve understanding — not replace professional healthcare." },
];

export default function EditorialStandardsPage() {
  return (
    <>
      <PageHero eyebrow="Editorial Standards" title="Trust is" accent="earned.">
        <p>Healthcare communication carries responsibility.</p>
        <p>People may use what they read, hear or watch to shape questions, decisions and conversations about their health. We therefore take accuracy, context, transparency and responsible communication seriously.</p>
      </PageHero>

      <Section tone="ivory" eyebrow="Our principles" title="Ten commitments" accent="to our readers.">
        <CardGrid items={PRINCIPLES} />
      </Section>

      <Section tone="dark" eyebrow="Sources" title="Depending on the subject, our work may" accent="draw from:">
        <Chips tone="dark" items={["Peer-reviewed research", "Universities and research institutions", "Healthcare institutions", "Government health agencies", "WHO and other recognised international health organisations", "Professional bodies", "Qualified healthcare professionals", "First-hand interviews and documented experiences"]} />
        <Reveal className="mt-8 text-ivory/80 t-lead"><p>We aim to distinguish evidence from opinion, experience and interpretation.</p></Reveal>
      </Section>

      <Section tone="sage" eyebrow="A note about contributors" title="Opinions belong" accent="to contributors.">
        <Reveal className="prose-col space-y-4 text-charcoal/80 t-lead">
          <p>Contributors may express opinions based on their expertise or experience.</p>
          <p>A contributor&apos;s participation does not mean that TheraVita endorses every opinion they hold. Relevant affiliations and conflicts of interest should be disclosed where appropriate.</p>
        </Reveal>
      </Section>

      <Section tone="charcoal" eyebrow="Our commitment">
        <Reveal className="max-w-3xl">
          <p className="prose-col text-ivory/80 t-lead">We will not always get everything right. But we will always aim to work responsibly, correct errors when identified and remain open to evidence, questions and constructive criticism.</p>
          <p className="t-h2 serif-italic mt-8 text-ivory">Trust is not something we claim. <span className="text-tv-green">It is something we intend to earn.</span></p>
        </Reveal>
      </Section>
    </>
  );
}
