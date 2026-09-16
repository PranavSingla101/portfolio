"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const INITIAL_COUNT = 4;

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.28);
  const [showAll, setShowAll] = useState(false);

  const hiddenCount = projectsData.length - INITIAL_COUNT;

  return (
    <section
      id="projects"
      ref={ref}
      className="relative mx-auto mb-32 sm:mb-40 w-full max-w-[90rem] scroll-mt-28 px-6"
    >
      <SectionHeading eyebrow="01 — Work" accent="Projects">
        Selected
      </SectionHeading>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-8">
        {projectsData.slice(0, INITIAL_COUNT).map((project, index) => (
          <Project key={project.title} {...project} index={index} />
        ))}

        <AnimatePresence>
          {showAll &&
            projectsData.slice(INITIAL_COUNT).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
                className="h-full w-full"
              >
                <Project {...project} index={INITIAL_COUNT + index} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {hiddenCount > 0 && (
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setShowAll((p) => !p)}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/85 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:text-white active:scale-[0.97]"
          >
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-aurora-violet/0 via-aurora-violet/15 to-aurora-cyan/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span>
              {showAll ? "Show less" : `Show ${hiddenCount} more project${hiddenCount > 1 ? "s" : ""}`}
            </span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/[0.06] transition-transform duration-300 group-hover:translate-y-0.5">
              {showAll ? <BsChevronUp className="text-xs" /> : <BsChevronDown className="text-xs" />}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
