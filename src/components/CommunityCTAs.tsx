import Link from "next/link";
import { ArrowRight, Building, MessageCircleQuestion, PenLine, Users, Stethoscope } from "lucide-react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";
import { ASK_HREF } from "@/lib/content";

const card =
  "group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition duration-300 hover:-translate-y-2 sm:p-9";
const title = "mt-6 font-serif text-[1.85rem] font-medium leading-tight sm:text-3xl";
const cta = "mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold";
const arrow = <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" aria-hidden="true" />;

export function CommunityCTAs() {
  return (
    <section id="join" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow className="text-deep-emerald">Join the conversation</Eyebrow>
          <h2 className="t-h2 text-deep-green">
            Healthcare should not be a conversation <span className="serif-italic text-deep-emerald">only between institutions</span>.
          </h2>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-6">
          {/* Community */}
          <Reveal className="h-full lg:col-span-3">
            <Link href="/community" className={`${card} bg-gradient-to-br from-deep-emerald to-deep-green text-ivory shadow-card hover:shadow-[0_30px_60px_-20px_rgb(8_93_56/0.7)]`}>
              <span aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-tv-green/25 blur-3xl transition-all duration-500 group-hover:scale-125" />
              <Users size={30} strokeWidth={1.5} className="relative text-tv-green" aria-hidden="true" />
              <h3 className={`relative ${title}`}>Join the TheraVita Community</h3>
              <p className="relative mt-3 text-ivory/80">
                Patients, families, caregivers, practitioners, researchers, innovators and communities all have something to
                contribute. Join a growing community interested in understanding healthcare differently.
              </p>
              <span className={`relative ${cta}`}>Join the TheraVita Community {arrow}</span>
            </Link>
          </Reveal>

          {/* Question */}
          <Reveal delay={0.1} className="h-full lg:col-span-3">
            <Link id="ask" href={ASK_HREF} className={`${card} border border-deep-green/15 bg-sage text-deep-green shadow-card hover:border-tv-green hover:shadow-card-hover`}>
              <MessageCircleQuestion size={30} strokeWidth={1.5} className="text-deep-emerald" aria-hidden="true" />
              <h3 className={title}>Have a Question?</h3>
              <p className="mt-3 text-charcoal/75">
                There are things about healthcare you have always wanted to understand. Ask us. Your question could become
                the beginning of a conversation, investigation, expert discussion or story.
              </p>
              <p className="serif-italic mt-4 text-lg text-deep-emerald">What do you wish you understood better about healthcare?</p>
              <span className={`${cta} text-deep-emerald`}>Ask TheraVita {arrow}</span>
            </Link>
          </Reveal>

          {/* Experts */}
          <Reveal delay={0.05} className="h-full lg:col-span-2">
            <Link href="/experts" className={`${card} bg-charcoal text-ivory shadow-card ring-1 ring-gold/40 hover:ring-gold hover:shadow-[0_30px_60px_-20px_rgb(185_154_91/0.4)]`}>
              <Stethoscope size={30} strokeWidth={1.5} className="text-gold" aria-hidden="true" />
              <h3 className={title}>For Experts</h3>
              <p className="mt-3 text-ivory/75">
                Doctor, nurse, pharmacist, researcher, public-health professional, administrator, technologist, policymaker
                or caregiver? We want to hear from people who understand healthcare from the inside.
              </p>
              <span className={`${cta} text-gold`}>Become a TheraVita Expert {arrow}</span>
            </Link>
          </Reveal>

          {/* Contributors */}
          <Reveal delay={0.15} className="h-full lg:col-span-2">
            <Link href="/contribute" className={`${card} border border-deep-green/15 bg-white shadow-card hover:border-tv-green hover:shadow-card-hover`}>
              <PenLine size={30} strokeWidth={1.5} className="text-deep-emerald" aria-hidden="true" />
              <h3 className={`${title} text-deep-green`}>For Contributors</h3>
              <p className="mt-3 text-charcoal/75">
                You may have a story. An idea. A question. An investigation. A perspective that deserves to be heard.
              </p>
              <span className={`${cta} text-deep-emerald`}>Become a Contributor {arrow}</span>
            </Link>
          </Reveal>

          {/* Organisations */}
          <Reveal delay={0.25} className="h-full lg:col-span-2">
            <Link href="/partner" className={`${card} bg-gradient-to-br from-deep-green to-[#0b4a35] text-ivory shadow-card ring-1 ring-tv-green/30 hover:ring-tv-green hover:shadow-[0_30px_60px_-20px_rgb(47_158_75/0.5)]`}>
              <Building size={30} strokeWidth={1.5} className="text-tv-green" aria-hidden="true" />
              <h3 className={title}>For Organisations</h3>
              <p className="mt-3 text-ivory/80">
                Healthcare organisations have stories to tell, ideas to share and communities to reach. We work on meaningful
                healthcare communication, knowledge-sharing and public engagement.
              </p>
              <span className={`${cta} text-tv-green`}>Partner With TheraVita {arrow}</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
