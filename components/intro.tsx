"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin, BsArrowDown } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText, HiOutlineMail } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";
import Magnetic from "./magnetic";
import Marquee from "./marquee";
import { skillsData } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const secondaryBtn =
  "group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora-violet";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // Flatten every skill into one strip for the marquee (no new content).
  const stack = skillsData.flatMap((g) => g.skills);
  const half = Math.ceil(stack.length / 2);

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full scroll-mt-5 particles-section pt-32 sm:pt-40 pb-10 overflow-hidden"
    >
      <ParticleContainer />

      {/* Soft glow behind the name */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[30%] h-[28rem] w-[60rem] max-w-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.22),rgba(232,121,249,0.08)_45%,transparent_70%)] blur-2xl"
      />

      <motion.div
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
        }}
      >
        {/* Avatar with rotating conic ring */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.85, filter: "blur(10px)" },
            visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative mb-8"
        >
          <div className="absolute -inset-6 rounded-full bg-aurora-violet/25 blur-3xl animate-float" />
          <div className="relative rounded-full p-[3px] conic-ring shadow-glow-lg">
            <div className="rounded-full bg-ink-900 p-[3px]">
              <Image
                src="/LINKEDIN_HEADSHOT_UPDATED.jpeg"
                alt="Pranav portrait"
                width={192}
                height={192}
                quality={95}
                priority
                className="h-28 w-28 sm:h-36 sm:w-36 rounded-full object-cover object-center"
              />
            </div>
          </div>
          <motion.span
            className="absolute -bottom-1 -right-1 grid h-11 w-11 place-items-center rounded-full bg-ink-800 border border-white/10 text-2xl shadow-lg select-none"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 18, -8, 18, 0] }}
            transition={{ delay: 1.2, duration: 1.4, ease: "easeInOut" }}
            aria-hidden
          >
            👋
          </motion.span>
        </motion.div>

        {/* Status pill */}
        <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: EASE }}>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.18em] uppercase text-emerald-300">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to internships
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-6 font-display text-[clamp(3rem,10vw,7.5rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-shine"
        >
          Pranav Singla
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
        >
          <span className="text-white/90">AI </span>
          <span className="font-serif italic font-normal text-aurora text-[1.15em]">
            Software Developer
          </span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-6 max-w-lg text-base sm:text-lg text-white/55 leading-relaxed"
        >
          I build intelligent applications and complex workflows.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic>
            <Link
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora-fuchsia"
              href="#contact"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-aurora-violet via-aurora-fuchsia to-aurora-cyan bg-[length:200%_100%] animate-gradient-shift" />
              <span className="absolute inset-[1.5px] rounded-full bg-ink-900/90 transition-opacity duration-300 group-hover:opacity-0" />
              <span className="relative flex items-center gap-2">
                <HiOutlineMail className="text-lg" />
                Contact me
              </span>
            </Link>
          </Magnetic>

          <Magnetic strength={0.25}>
            <a
              className={secondaryBtn}
              href="https://github.com/PranavSingla101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
          </Magnetic>

          <Magnetic strength={0.25}>
            <a
              className={secondaryBtn}
              href="https://www.linkedin.com/in/pranavsingla202/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-base" />
              LinkedIn
            </a>
          </Magnetic>

          {/* TODO: drop the PDF at public/resume.pdf (or point href elsewhere) */}
          <Magnetic strength={0.25}>
            <a className={secondaryBtn} href="/resume.pdf" download>
              <HiOutlineDocumentText className="text-lg" />
              Resume
            </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Stack marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 mt-20 sm:mt-24 flex flex-col gap-3"
      >
        <Marquee items={stack.slice(0, half)} />
        <Marquee items={stack.slice(half)} reverse />
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#projects"
        onClick={() => {
          setActiveSection("Projects");
          setTimeOfLastClick(Date.now());
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="relative z-10 mx-auto mt-14 hidden sm:flex flex-col items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-white/35 hover:text-white/70 transition-colors"
        aria-label="Scroll to projects"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <BsArrowDown />
        </motion.span>
      </motion.a>
    </section>
  );
}
