import type { Metadata } from "next";
import { PageHero, Section, CardGrid, Button, StatementStack } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Community",
  description: "Don't just consume healthcare information. Be part of the conversation. Join the TheraVita community.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero eyebrow="The TheraVita Community" title="Don't just consume healthcare information." accent="Be part of the conversation."
        actions={<Button href="/contact?topic=community#message">Join the Community</Button>}>
        <p>TheraVita Intelligence is being built around a simple belief: the people experiencing healthcare should have a voice in understanding it.</p>
        <p>Our community brings together people interested in asking better questions, understanding healthcare and participating in meaningful conversations.</p>
      </PageHero>

      <Section tone="ivory" eyebrow="What you can expect" title="Five things" accent="you will find here.">
        <CardGrid
          items={[
            { icon: "leaf", title: "Intelligence", body: "Thoughtful stories, explanations and insights." },
            { icon: "message", title: "Conversations", body: "Questions and discussions around the issues shaping healthcare." },
            { icon: "mic", title: "Experts", body: "Access to conversations with people who understand healthcare from different perspectives." },
            { icon: "users", title: "Stories", body: "Real experiences that help us understand the healthcare journey." },
            { icon: "handshake", title: "Opportunities", body: "Invitations to conversations, events, research initiatives and future TheraVita programmes." },
          ]}
        />
      </Section>

      <Section tone="dark" eyebrow="How to join" title="Join our community" accent="through:">
        <CardGrid
          tone="dark"
          items={[
            { icon: "message", title: "WhatsApp Community", body: "For direct conversations, updates and selected intelligence." },
            { icon: "mail", title: "Email", body: "For our latest stories and important developments." },
            { icon: "users", title: "Events & Conversations", body: "For deeper engagement with experts, institutions and members of the community." },
          ]}
        />
        <Reveal className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact?topic=community#message">Join the WhatsApp Community</Button>
          <Button href="/contact?topic=community#message" variant="ghost">Subscribe for Intelligence</Button>
          <Button href="/contact?topic=community#message" variant="ghost">Follow TheraVita</Button>
        </Reveal>
      </Section>

      <Section tone="charcoal">
        <StatementStack tone="charcoal" lines={["We are building this community carefully.", "Not for noise.", "Not for numbers alone.", "But for people who genuinely want to understand healthcare differently."]} />
      </Section>
    </>
  );
}
