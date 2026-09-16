"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import pecLogo from "@/public/Pec logo cleaned.png";
import { HiAcademicCap } from "react-icons/hi2";
import Card from "./card";
import SectionHeading from "./section-heading";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <section
      id="education"
      ref={ref}
      className="relative mx-auto mb-32 sm:mb-40 w-full max-w-3xl scroll-mt-28 px-6"
    >
      <SectionHeading eyebrow="04 — Academics" accent="Education">
        My
      </SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Card radius="3xl" elevation="high" hover="lift" spotColor="34 211 238" className="p-7 sm:p-9">
          <div className="flex flex-col items-center gap-7 sm:flex-row sm:items-start sm:gap-9">
            {/* Logo */}
            <div className="relative shrink-0">
              <div className="absolute -inset-3 rounded-3xl bg-aurora-cyan/20 blur-2xl" />
              <div className="relative grid h-24 w-24 place-items-center overflow-hidden rounded-2xl bg-white p-2 shadow-glow-cyan ring-1 ring-white/20 sm:h-28 sm:w-28">
                <Image
                  src={pecLogo}
                  alt="Punjab Engineering College Logo"
                  width={112}
                  height={112}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-aurora-cyan/25 bg-aurora-cyan/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-aurora-cyan">
                <HiAcademicCap className="text-sm" />
                Bachelor of Technology
              </div>

              <h3 className="font-display text-2xl font-bold tracking-tight text-white leading-tight sm:text-3xl">
                Computer Science and Engineering
              </h3>

              <p className="mt-2 text-base font-medium text-aurora">
                Punjab Engineering College
              </p>

              <div className="my-4 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                August 2023 – September 2027
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
