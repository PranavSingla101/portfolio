"use client";

import React from "react";
import { n8nWorkflowsData } from "@/lib/n8n-workflows-data";
import Project from "@/components/project";
import ParticleContainer from "@/components/particle-container";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function N8NWorkflowsPage() {
  return (
    <main className="relative flex flex-col items-center overflow-x-clip">
      {/* ── Hero ── */}
      <section className="particles-section relative w-full px-6 pt-32 pb-12 text-center sm:pt-40 sm:pb-16">
        <ParticleContainer />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[20%] h-[20rem] w-[50rem] max-w-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.22),rgba(34,211,238,0.06)_45%,transparent_70%)] blur-2xl"
        />

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative z-10 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-white/50"
        >
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-aurora-violet" />
          Automation
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-aurora-cyan" />
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          className="relative z-10 mt-5 font-display text-5xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl"
        >
          N8N{" "}
          <span className="font-serif italic font-normal text-aurora">Workflows</span>
        </motion.h1>
      </section>

      {/* ── Cards ── */}
      <section className="mx-auto mb-32 w-full max-w-[90rem] px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
          >
            <BsArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to projects
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8">
          {n8nWorkflowsData.map((workflow, index) => (
            <Project key={workflow.title} {...workflow} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
