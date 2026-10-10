import { Reveal } from "./Reveal";
import { Eyebrow, Questions } from "./ui";

const QUESTIONS = [
  "Why are people still struggling to access care?",
  "Why do patients leave healthcare facilities confused?",
  "Why do families make certain healthcare decisions?",
  "Why do some health messages spread while others do not?",
  "How are technology and artificial intelligence changing healthcare?",
  "What is happening inside Africa's healthcare systems?",
  "And what does all of this mean for ordinary people?",
];

export function NotAnother() {
  return (
    <section className="relative overflow-hidden bg-deep-green py-24 sm:py-32">
      <span aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-tv-green/15 blur-[110px]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal>
          <Eyebrow>Not another health-tip platform</Eyebrow>
          <h2 className="t-h2 text-ivory">
            We are interested in the <span className="serif-italic text-tv-green">questions underneath</span> the advice.
          </h2>
          <div className="prose-col mt-7 space-y-3 text-ivory/80 t-lead">
            <p>There is already plenty of health advice online.</p>
            <p>That is not what we are trying to add.</p>
          </div>
        </Reveal>
        <div>
          <Questions items={QUESTIONS} tone="dark" />
          <Reveal delay={0.2} className="mt-10 border-t border-white/15 pt-6">
            <p className="serif-italic text-2xl text-gold sm:text-3xl">
              We believe better healthcare begins with better understanding.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
