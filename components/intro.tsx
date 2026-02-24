"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./particle-container";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-5 particles-section pt-28 pb-14 sm:pt-36 sm:pb-20 w-full px-4"
    >
      <ParticleContainer />
      {/* Hero card */}
      <motion.div
        className="mx-auto max-w-xl rounded-3xl border border-slate-600/40 bg-gradient-to-b from-slate-900 to-slate-950 py-10 sm:py-14 px-6 sm:px-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)_inset]"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="relative flex justify-center"
            >
              <div className="rounded-full p-1 ring-2 ring-indigo-400/30 ring-offset-2 ring-offset-slate-900 shadow-[0_0_30px_-5px_rgba(99,102,241,0.25)]">
                <Image
                  src="/LINKEDIN_HEADSHOT_UPDATED.jpeg"
                  alt="Pranav portrait"
                  width="192"
                  height="192"
                  quality="95"
                  priority={true}
                  className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover object-center"
                />
              </div>
            </motion.div>
            <motion.span
              className="absolute -bottom-0.5 right-0 text-2xl opacity-90 select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              aria-hidden
            >
              👋
            </motion.span>
          </div>
        </div>

        <motion.div
          className="mt-7 flex flex-col gap-2 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.12 },
            },
          }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Pranav Singla
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent"
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            AI Software Developer
          </motion.p>
          <motion.p
            className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-sm mx-auto mt-1"
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            I build intelligent applications and complex workflows.
          </motion.p>
        </motion.div>

        <div className="mt-8 pt-6 border-t border-slate-700/60">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Connect
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              className="group inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              href="https://github.com/PranavSingla101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg text-white/90" />
              GitHub
            </a>
            <a
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-500/60 bg-slate-800/50 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-400 hover:bg-slate-700/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              href="https://www.linkedin.com/in/pranavsingla202/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-lg" />
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
