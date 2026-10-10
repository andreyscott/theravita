import { Reveal } from "./Reveal";
import { Eyebrow, Questions, TextLink } from "./ui";

const QUESTIONS = [
  "What does it mean?",
  "Why does it happen?",
  "Who does it affect?",
  "How does the healthcare system actually work?",
  "What are people not seeing?",
  "What could change?",
];

export function Intro() {
  return (
    <section className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
        <div>
          <Reveal>
            <Eyebrow className="text-deep-emerald">Welcome</Eyebrow>
            <p className="prose-col text-charcoal/80 t-lead">
              Healthcare is more than symptoms, diagnoses and treatment. It is also about people. It is about
              decisions, systems, money, technology, culture, access, trust and the experiences people have when they
              need care.
            </p>
            <h2 className="t-h2 mt-8 text-deep-green">
              We don&apos;t just tell you what is happening.{" "}
              <span className="serif-italic text-deep-emerald">We help you understand why.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="prose-col mt-8 space-y-4 text-charcoal/75 t-lead">
            <p>
              Every day, people encounter thousands of pieces of health information. But information alone is not
              always enough.
            </p>
          </Reveal>
        </div>

        <div className="lg:pt-6">
          <Questions items={QUESTIONS} />
          <Reveal delay={0.2} className="mt-10">
            <p className="font-semibold text-deep-green">These are the questions we explore.</p>
            <p className="mt-1 text-charcoal/70">Welcome to TheraVita Intelligence.</p>
            <TextLink href="/about" className="mt-4 text-deep-emerald">About TheraVita Intelligence</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
