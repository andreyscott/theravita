import type { Metadata } from "next";
import { PageHero, Section, CardGrid, Button, Chips } from "@/components/ui";

export const metadata: Metadata = {
  title: "TheraVita Conversations",
  description: "Some questions deserve a conversation. Expert conversations, roundtables, community conversations and documentaries.",
};

export default function ConversationsPage() {
  return (
    <>
      <PageHero eyebrow="TheraVita Conversations" title="Some questions deserve" accent="a conversation.">
        <p>TheraVita Conversations brings together people with different perspectives on healthcare.</p>
        <p>We talk about the issues that matter — without reducing complex healthcare questions to soundbites.</p>
      </PageHero>

      <Section tone="ivory" eyebrow="Who's at the table">
        <Chips items={["Doctors", "Researchers", "Patients", "Caregivers", "Entrepreneurs", "Innovators", "Leaders"]} />
      </Section>

      <Section tone="dark" eyebrow="Conversation formats" title="Five ways" accent="to talk it through.">
        <CardGrid
          tone="dark"
          items={[
            { icon: "mic", title: "Expert Conversations", body: "One-on-one conversations with people who understand a particular healthcare issue." },
            { icon: "users", title: "Roundtables", body: "Different perspectives around one important question." },
            { icon: "message", title: "Community Conversations", body: "Questions emerging directly from the people experiencing healthcare." },
            { icon: "search", title: "Special Conversations", body: "Focused discussions around major developments, technologies or healthcare moments." },
            { icon: "news", title: "Documentary Conversations", body: "Long-form storytelling combining people, places, evidence and experience." },
          ]}
        />
      </Section>

      <Section tone="charcoal">
        <h2 className="t-h2 serif-italic text-ivory">Watch. Listen. Think. Discuss.</h2>
        <div className="mt-8"><Button href="/stories">Explore Conversations</Button></div>
      </Section>
    </>
  );
}
