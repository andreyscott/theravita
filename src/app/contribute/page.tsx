import type { Metadata } from "next";
import { PageHero, Section, CardGrid, CrossList, CTABand, Questions } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Become a Contributor",
  description: "Have something worth exploring? TheraVita Intelligence welcomes ideas, stories, investigations, research and expert perspectives.",
};

export default function ContributePage() {
  return (
    <>
      <PageHero eyebrow="Become a TheraVita Contributor" title="Have something" accent="worth exploring?">
        <p>TheraVita Intelligence is built around questions, ideas, experiences and perspectives that can help people understand healthcare differently.</p>
        <p>We welcome contributions from writers, researchers, healthcare professionals, patients, caregivers, entrepreneurs, technologists, academics and thoughtful observers of healthcare.</p>
        <p className="font-semibold text-ivory">You do not have to be a medical professional to have a valuable healthcare perspective. You do need to bring something meaningful.</p>
      </PageHero>

      <Section tone="ivory" eyebrow="We are interested in" title="Six kinds of" accent="contribution.">
        <CardGrid
          items={[
            { icon: "message", title: "Ideas", body: "Thoughtful perspectives on important healthcare questions." },
            { icon: "users", title: "Stories", body: "Human experiences that reveal something about healthcare." },
            { icon: "search", title: "Investigations", body: "Questions that deserve deeper examination." },
            { icon: "book", title: "Research", body: "Evidence, studies and findings that deserve wider understanding." },
            { icon: "mic", title: "Expert Perspectives", body: "Professional insight into healthcare issues." },
            { icon: "cpu", title: "The Future", body: "Ideas about technology, innovation and the changing healthcare landscape." },
          ]}
        />
      </Section>

      <Section tone="sage" eyebrow="What we look for" title="Contributions should be:">
        <CardGrid
          tone="sage"
          items={[
            { num: "01", title: "Original", body: "Your own work or properly attributed material." },
            { num: "02", title: "Evidence-informed", body: "Important claims should be supported by credible sources." },
            { num: "03", title: "Clear", body: "Complex ideas should be communicated in language people can understand." },
            { num: "04", title: "Responsible", body: "Health information can affect real decisions. We take that responsibility seriously." },
            { num: "05", title: "Relevant", body: "The contribution should help readers understand health, healthcare, people, the future or society." },
          ]}
        />
      </Section>

      <Section tone="charcoal" eyebrow="Before you submit" title="Please do not" accent="send:">
        <CrossList items={["Promotional articles disguised as editorial content", "Unsupported medical claims", "Plagiarised material", "Personal medical diagnosis requests", "Content designed primarily to sell a product or service", "Content containing undisclosed conflicts of interest"]} />
        <Reveal className="mt-8 text-ivory/80">
          <p>All submissions are subject to editorial review. Publication is not guaranteed.</p>
        </Reveal>
      </Section>

      <Section tone="ivory" eyebrow="Ready to contribute?" title="Send us:">
        <Questions items={["Your name", "Professional background / area of interest", "Proposed title or idea", "Short description of the proposed contribution", "Relevant links or previous work", "Contact details"]} />
      </Section>
      <CTABand title="Submit your idea." label="Submit Your Idea" href="/contact?topic=contributor#message" variant="gold" />
    </>
  );
}
