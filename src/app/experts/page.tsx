import type { Metadata } from "next";
import { PageHero, Section, Chips, CardGrid, CTABand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "TheraVita Experts",
  description: "Knowledge becomes more useful when people can trust the people behind it. Meet the TheraVita expert community.",
};

export default function ExpertsPage() {
  return (
    <>
      <PageHero eyebrow="Our Experts" title="TheraVita" accent="Experts">
        <p>Knowledge becomes more useful when people can trust the people behind it.</p>
        <p>Healthcare is too complex to be understood from one perspective.</p>
      </PageHero>

      <Section tone="ivory" eyebrow="Our expert community" title="Professional, academic and" accent="lived experience."
        intro={<p>TheraVita Intelligence brings together people with professional, academic and lived experience across healthcare. Our expert community may include:</p>}>
        <Chips items={["Doctors", "Nurses", "Pharmacists", "Researchers", "Public-health professionals", "Healthcare administrators", "Health economists", "Technologists", "Entrepreneurs", "Policy professionals", "Caregivers", "Patient advocates"]} />
      </Section>

      <Section tone="dark" eyebrow="What our experts do" title="Our experts may" accent="contribute through:">
        <CardGrid
          tone="dark"
          items={[
            { icon: "mic", title: "Interviews" },
            { icon: "book", title: "Expert explanations" },
            { icon: "pen", title: "Articles and perspectives" },
            { icon: "users", title: "Roundtable discussions" },
            { icon: "mic", title: "Podcasts" },
            { icon: "news", title: "Documentaries" },
            { icon: "search", title: "Research conversations" },
            { icon: "message", title: "Community events" },
          ]}
        />
        <Reveal className="mt-12 max-w-3xl rounded-2xl border border-gold/40 bg-gold/10 p-6 text-ivory/85">
          <p>Being featured by TheraVita does not constitute an endorsement of every opinion expressed by an individual contributor.</p>
          <p className="mt-3">We identify contributors according to their relevant expertise and disclose relevant affiliations where appropriate.</p>
        </Reveal>
      </Section>

      <CTABand
        title="Are you a healthcare expert?"
        body={<p>If you have knowledge or experience that can help people understand healthcare better, we would like to hear from you.</p>}
        label="Join the TheraVita Expert Network"
        href="/contact?topic=expert#message"
      />
    </>
  );
}
