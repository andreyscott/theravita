import type { Metadata } from "next";
import { PageHero, Section, CardGrid, Chips, Button, CTABand, StatementStack } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "TheraVita Global",
  description: "Building the intelligence and infrastructure for a better healthcare experience.",
};

export default function GlobalPage() {
  return (
    <>
      <PageHero
        eyebrow="TheraVita Global"
        title="Building the intelligence and infrastructure for a better"
        accent="healthcare experience."
        image="/images/hero-portrait.jpg"
        actions={<Button href="/">Explore TheraVita Intelligence</Button>}
      >
        <p>Healthcare affects every part of human life. Yet understanding healthcare, accessing the right services, making informed decisions and navigating the healthcare system can still be difficult.</p>
        <p>TheraVita Global is building a healthcare intelligence and technology company focused on making healthcare more understandable, more navigable and more connected.</p>
      </PageHero>

      <Section tone="ivory" eyebrow="Our vision" title="A more intelligent" accent="healthcare experience.">
        <Reveal className="prose-col space-y-4 text-charcoal/80 t-lead">
          <p>We believe the future of healthcare will depend on more than medicine, hospitals and technology.</p>
          <p>It will also depend on how effectively people can understand health, navigate healthcare, access trusted information, connect with the right services and make informed decisions.</p>
          <p className="font-semibold text-deep-green">TheraVita Global is building toward that future.</p>
        </Reveal>
      </Section>

      <Section tone="sage" eyebrow="What we are building" title="Four foundations" accent="for the future.">
        <CardGrid
          cols={2}
          tone="sage"
          items={[
            { icon: "leaf", title: "Healthcare Intelligence", body: "We explore healthcare beyond symptoms and diagnoses — examining the systems, people, decisions, technologies, economics and experiences that shape how healthcare actually works." },
            { icon: "cpu", title: "Digital Health & Technology", body: "We are exploring technologies and digital systems capable of improving how people interact with healthcare." },
            { icon: "route", title: "Healthcare Navigation", body: "We believe people should be better equipped to understand where to go, what questions to ask and how to navigate complex healthcare journeys." },
            { icon: "network", title: "Healthcare Infrastructure", body: "Over time, TheraVita Global will develop and support intelligent infrastructure designed to improve coordination, access and healthcare experiences." },
          ]}
        />
      </Section>

      <Section tone="dark" eyebrow="The first layer" title="TheraVita Intelligence." accent="Healthcare. Understood.">
        <Reveal className="prose-col space-y-4 text-ivory/80 t-lead">
          <p>Before we build infrastructure, we are building something equally important: understanding.</p>
          <p>TheraVita Intelligence is our public platform for exploring healthcare through evidence, expert knowledge, investigation, storytelling and community.</p>
        </Reveal>
        <div className="mt-10"><StatementStack lines={["We look beyond the obvious.", "We ask why things happen.", "We examine the systems behind the experience.", "We listen to the people living through healthcare.", "And we explore what healthcare could become."]} /></div>
        <Reveal className="mt-10"><Button href="/">Explore TheraVita Intelligence</Button></Reveal>
      </Section>

      <Section tone="ivory" eyebrow="Our approach" title="Understand. Connect." accent="Build.">
        <CardGrid
          items={[
            { num: "01", title: "Understand", body: "We investigate the questions, systems and experiences shaping healthcare." },
            { num: "02", title: "Connect", body: "We bring together people, knowledge, expertise and conversations that can create better understanding." },
            { num: "03", title: "Build", body: "We use what we learn to develop new ideas, technologies and infrastructure for the future." },
          ]}
        />
      </Section>

      <Section tone="charcoal" eyebrow="Where we are going" title="Connect. Intelligence." accent="Infrastructure follows.">
        <Reveal className="prose-col space-y-4 text-ivory/80 t-lead">
          <p>TheraVita Global is being built deliberately.</p>
          <p>We are beginning by building knowledge, community and an understanding of the healthcare environment.</p>
          <p>And on this foundation, we will develop the technologies and infrastructure capable of turning intelligence into better healthcare experiences.</p>
        </Reveal>
      </Section>

      <Section tone="sage" eyebrow="Work with TheraVita" title="Healthcare is too important to be" accent="built in isolation."
        intro={<p>We are interested in working with:</p>}>
        <Chips tone="sage" items={["Healthcare organisations", "Hospitals and clinics", "Healthcare professionals", "Researchers and academics", "Technology companies", "Health innovators", "Institutions and development organisations", "Brands and organisations interested in healthcare communication", "People with ideas capable of improving healthcare"]} />
        <Reveal className="mt-10"><Button href="/partner">Partner with TheraVita</Button></Reveal>
      </Section>

      <Section tone="ivory" eyebrow="About TheraVita Global">
        <Reveal className="prose-col space-y-4 text-charcoal/80 t-lead">
          <p>TheraVita Global is a healthcare intelligence and technology company being developed to explore, understand and build solutions around the changing healthcare experience.</p>
          <p>Our work begins with intelligence and community.</p>
          <p>Our long-term ambition is to contribute to a more connected, accessible and intelligent healthcare ecosystem.</p>
        </Reveal>
      </Section>
      <CTABand title="The future is being built. The intelligence starts now." label="Explore TheraVita Intelligence" href="/" />
    </>
  );
}
