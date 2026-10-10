import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Icon, type IconName } from "@/components/Icon";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a question, idea or opportunity? Contact TheraVita Intelligence.",
};

const CHANNELS: { icon: IconName; title: string; body: string; cta: string; topic: string }[] = [
  { icon: "mail", title: "General Enquiries", body: "For general questions about TheraVita Intelligence.", cta: "Contact Us", topic: "general" },
  { icon: "news", title: "Editorial", body: "Have a story idea, correction, source, investigation or editorial question?", cta: "Contact Editorial", topic: "editorial" },
  { icon: "pen", title: "Contributors", body: "Interested in writing or contributing?", cta: "Become a Contributor", topic: "contributor" },
  { icon: "mic", title: "Experts", body: "Interested in joining the TheraVita Expert Network?", cta: "Join the Expert Network", topic: "expert" },
  { icon: "handshake", title: "Partnerships", body: "Interested in working with TheraVita?", cta: "Start a Partnership Conversation", topic: "partnership" },
  { icon: "message", title: "Media", body: "For media enquiries and interview requests.", cta: "Contact Media", topic: "media" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact TheraVita" title="Have a question, idea" accent="or opportunity?">
        <p>We would like to hear from you.</p>
      </PageHero>

      <Section tone="ivory">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <Link
                  href={`/contact?topic=${c.topic}#message`}
                  className="group flex h-full flex-col rounded-2xl border border-deep-green/10 bg-white/80 p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-tv-green/60 hover:shadow-card-hover"
                >
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-sage text-deep-emerald transition-colors group-hover:bg-tv-green group-hover:text-white">
                    <Icon name={c.icon} size={24} />
                  </span>
                  <h2 className="t-h3 text-deep-green">{c.title}</h2>
                  <p className="mt-2 text-charcoal/70">{c.body}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-deep-emerald">
                    {c.cta}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="message" tone="sage" eyebrow="Send us a message" title="We read" accent="every message." className="scroll-mt-16">
        <div className="max-w-3xl">
          <Reveal><ContactForm /></Reveal>
        </div>
      </Section>
    </>
  );
}
