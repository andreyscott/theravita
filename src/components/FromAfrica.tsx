import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LogoMark } from "./Logo";
import { Reveal } from "./Reveal";

function Globe() {
  const meridians = [0, 22, 45, 68, 90, 112, 135, 158];
  const parallels = [-60, -40, -20, 0, 20, 40, 60];
  return (
    <svg viewBox="-110 -110 220 220" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="0.5">
      <circle r="100" />
      <g className="origin-center [animation:globe-spin_120s_linear_infinite]">
        <circle r="108" strokeDasharray="1 5" />
      </g>
      {meridians.map((a) => (
        <ellipse key={a} rx={100 * Math.abs(Math.cos((a * Math.PI) / 180))} ry="100" />
      ))}
      {parallels.map((p) => {
        const y = 100 * Math.sin((p * Math.PI) / 180);
        const r = 100 * Math.cos((p * Math.PI) / 180);
        return <ellipse key={p} cy={y} rx={r} ry={r * 0.14} />;
      })}
      {Array.from({ length: 28 }).map((_, i) => {
        const a = i * 2.399;
        const rad = 14 + ((i * 37) % 80);
        return <circle key={i} cx={Math.cos(a) * rad} cy={Math.sin(a) * rad} r="1.3" fill="currentColor" stroke="none" />;
      })}
    </svg>
  );
}

export function FromAfrica() {
  return (
    <section id="partner" className="relative isolate overflow-hidden bg-gradient-to-b from-ivory via-[#2a5d46] to-deep-green pt-32 sm:pt-44">
      {/* Globe motif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-[34rem] w-[34rem] text-tv-green opacity-[0.18] sm:right-0 sm:h-[44rem] sm:w-[44rem] lg:right-[6%]"
      >
        <Globe />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_20%_80%,rgb(47_158_75/0.2),transparent)]" />

      <div className="mx-auto grid max-w-7xl items-end gap-12 px-5 pb-24 sm:px-8 sm:pb-32 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <p className="t-eyebrow mb-5 flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold" /> From Africa. For a changing world.
          </p>
          <p className="t-h2 serif-italic text-ivory">
            Healthcare is changing everywhere.
            <br />
            But Africa&apos;s healthcare realities are distinct.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="glass rounded-3xl p-8 text-ivory">
          <LogoMark className="mb-5 h-12 w-10" />
          <p className="text-ivory/85">
            We want to document them, understand them and contribute to the conversations shaping what comes next.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1">
            <Link href="/about" className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-tv-green">
              About TheraVita Intelligence
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link href="/global" className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold">
              TheraVita Global
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
