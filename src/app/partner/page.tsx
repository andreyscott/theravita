import type { Metadata } from "next";
import { PageHero, Section, CardGrid, CTABand } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Partner with TheraVita",
  description: "Healthcare needs better conversations. TheraVita works with organisations improving healthcare understanding, communication and engagement.",
};

export default function PartnerPage() {
  return (
    <>
      <PageHero eyebrow="Partner with TheraVita" title="Healthcare needs" accent="better conversations.">
        <p>TheraVita works with organisations interested in improving healthcare understanding, communication, engagement and public conversations.</p>
      </PageHero>

      <Section tone="ivory" eyebrow="We are open to partnerships across" title="Six sectors," accent="one purpose.">
        <CardGrid
          items={[
            { icon: "building", title: "Healthcare", body: "Hospitals, clinics, HMOs, laboratories, pharmacies and healthcare organisations." },
            { icon: "book", title: "Research & Knowledge", body: "Universities, researchers, research institutions and knowledge organisations." },
            { icon: "cpu", title: "Technology", body: "Health-tech, AI, digital health and technology companies." },
            { icon: "globe", title: "Public & Development Sector", body: "Government institutions, NGOs, foundations and development organisations." },
            { icon: "handshake", title: "Corporate Organisations", body: "Companies interested in healthcare communication, employee wellbeing and meaningful public engagement." },
            { icon: "news", title: "Media & Creative Organisations", body: "Media companies, production houses, creators and organisations interested in healthcare storytelling." },
          ]}
        />
      </Section>

      <Section tone="dark" eyebrow="What we can build together" title="Partnership opportunities" accent="may include:">
        <CardGrid
          tone="dark"
          items={[
            { title: "Healthcare Conversations", body: "Expert discussions and public dialogues." },
            { title: "Knowledge & Education", body: "Evidence-informed educational initiatives." },
            { title: "Storytelling", body: "Documentaries, interviews, features and other healthcare narratives." },
            { title: "Research & Insight", body: "Collaborative exploration of healthcare questions and trends." },
            { title: "Community Engagement", body: "Meaningful engagement with healthcare audiences and communities." },
            { title: "Events", body: "Conferences, roundtables, forums and special programmes." },
          ]}
        />
      </Section>

      <Section tone="charcoal">
        <Reveal className="max-w-3xl">
          <h2 className="t-h2 text-ivory">We are <span className="serif-italic text-gold">selective</span> about partnerships.</h2>
          <p className="mt-6 text-ivory/80 t-lead">We want partnerships that create genuine value for audiences and contribute to better healthcare understanding.</p>
          <p className="mt-4 text-ivory/80 t-lead">If you have an idea, tell us what you are trying to achieve.</p>
        </Reveal>
      </Section>
      <CTABand title="Start a conversation." label="Start a Partnership Conversation" href="/contact?topic=partnership#message" />
    </>
  );
}
