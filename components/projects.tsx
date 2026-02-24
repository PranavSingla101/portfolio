"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.28);

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
      <div className="flex flex-col gap-20 sm:gap-24 lg:gap-28">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
