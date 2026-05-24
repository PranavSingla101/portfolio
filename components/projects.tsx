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

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, INITIAL_COUNT);
  const hiddenCount = projectsData.length - INITIAL_COUNT;

  return (
    <section
      id="projects"
      ref={ref}
      className="mb-28 max-w-[90rem] mx-auto scroll-mt-28 px-6"
    >
      <div className="text-center mb-12 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          My Projects
        </h2>
        <div className="mx-auto mt-4 w-16 h-0.5 rounded-full bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent" aria-hidden />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
        {projectsData.slice(0, INITIAL_COUNT).map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}

        <AnimatePresence>
          {showAll &&
            projectsData.slice(INITIAL_COUNT).map((project, index) => (
              <motion.div
                key={INITIAL_COUNT + index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                className="w-full h-full"
              >
                <Project {...project} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {hiddenCount > 0 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600/50 bg-slate-900/60 text-slate-300 text-sm font-semibold hover:bg-slate-800/80 hover:border-slate-500 hover:text-white transition-all duration-200 active:scale-[0.98]"
          >
            {showAll ? (
              <>
                Show Less <BsChevronUp className="text-base" />
              </>
            ) : (
              <>
                Show more <BsChevronDown className="text-base" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
