"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import pecLogo from "@/public/Pec logo cleaned.png";
import { HiAcademicCap } from "react-icons/hi2";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 max-w-3xl mx-auto px-6"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          My Education
        </h2>
        <div className="mx-auto mt-4 w-16 h-0.5 rounded-full bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent" aria-hidden />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative rounded-2xl border border-slate-600/40 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:border-indigo-500/30 hover:shadow-[0_8px_35px_rgba(99,102,241,0.08)] transition-all duration-300 overflow-hidden"
      >
        {/* Subtle top accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" aria-hidden />

        <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
          {/* Logo */}
          <div className="shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white shadow-md ring-1 ring-slate-600/30 overflow-hidden flex items-center justify-center">
              <Image
                src={pecLogo}
                alt="Punjab Engineering College Logo"
                width={96}
                height={96}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center sm:text-left">
            {/* Degree badge */}
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-3">
              <HiAcademicCap className="text-sm" />
              Bachelor of Technology
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-2">
              Computer Science and Engineering
            </h3>

            <p className="text-base font-semibold text-indigo-400/90 mb-3">
              Punjab Engineering College
            </p>

            <div className="h-px w-full bg-slate-700/40 mb-3" />

            <p className="text-sm text-slate-400 font-medium">
              August 2023 – September 2027
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
