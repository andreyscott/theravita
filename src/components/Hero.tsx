"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.5 } },
};
const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, reduce ? 1.08 : 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-12%"]);

  const subtext = ["Insights. People. Systems. The future.", "For better healthcare conversations."];

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-deep-green"
    >
      {/* Parallax leaf */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10 will-change-transform">
        <Image
          src="/images/hero-leaf.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] md:object-right"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-deep-green via-deep-green/80 to-deep-green/10 md:via-deep-green/60" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-deep-green via-transparent to-deep-green/60" />

      <motion.div style={{ y: textY }} className="mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.p variants={rise} className="t-eyebrow mb-6 flex items-center gap-3 text-tv-green">
            <span className="h-px w-8 bg-tv-green" /> TheraVita Intelligence
          </motion.p>

          <motion.h1 variants={rise} className="t-display text-ivory">
            Healthcare.
            <br />
            <span className="serif-italic bg-gradient-to-r from-[#9be08a] to-tv-green bg-clip-text text-transparent">
              Understood.
            </span>
          </motion.h1>

          <motion.span variants={rise} className="my-8 block h-px w-14 bg-tv-green" />

          <div className="space-y-1 text-ivory/90 t-lead">
            {subtext.map((line) => (
              <motion.p key={line} variants={rise}>
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div variants={rise} className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/explore"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-tv-green px-7 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              Explore Intelligence
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/community"
              className="glass inline-flex min-h-12 items-center rounded-full px-7 text-sm font-semibold text-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
            >
              Join the Community
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-ivory/60 md:flex" aria-hidden="true">
        <span className="t-eyebrow text-[0.65rem]">Scroll</span>
        <span className="relative block h-12 w-px overflow-hidden bg-white/20">
          <span className="absolute inset-x-0 h-1/2 bg-tv-green [animation:scroll-cue_1.8s_ease-in-out_infinite]" />
        </span>
      </div>
    </section>
  );
}
