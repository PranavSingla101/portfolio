"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const categoryAccents: Record<string, string> = {
  "Languages": "from-blue-500 to-cyan-400",
  "AI & LLMs": "from-purple-500 to-pink-400",
  "Automation & Workflows": "from-orange-500 to-amber-400",
  "Libraries & Frameworks": "from-green-500 to-emerald-400",
  "Databases & Tools": "from-red-500 to-rose-400",
  "CS Fundamentals": "from-indigo-500 to-violet-400",
};

const categoryBadge: Record<string, string> = {
  "Languages": "hover:border-cyan-400/60 hover:shadow-cyan-500/20",
  "AI & LLMs": "hover:border-pink-400/60 hover:shadow-pink-500/20",
  "Automation & Workflows": "hover:border-amber-400/60 hover:shadow-amber-500/20",
  "Libraries & Frameworks": "hover:border-emerald-400/60 hover:shadow-emerald-500/20",
  "Databases & Tools": "hover:border-rose-400/60 hover:shadow-rose-500/20",
  "CS Fundamentals": "hover:border-violet-400/60 hover:shadow-violet-500/20",
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-6xl mx-auto scroll-mt-28 sm:mb-40 px-4"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="mt-10 space-y-3">
        {skillsData.map((group, groupIndex) => {
          const gradient = categoryAccents[group.category] ?? "from-gray-500 to-gray-400";
          const badgeHover = categoryBadge[group.category] ?? "";

          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * groupIndex, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 dark:bg-white/[0.03] backdrop-blur-sm p-7 sm:p-9"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span className={`h-5 w-1.5 rounded-full bg-gradient-to-b ${gradient} shrink-0`} />
                <h3 className="font-semibold text-gray-800 dark:text-white text-lg tracking-wide">
                  {group.category}
                </h3>
              </div>

              {/* Skill badges */}
              <ul className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.08 * groupIndex + 0.04 * skillIndex,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.07, y: -2 }}
                    className={[
                      "flex items-center gap-2 px-4 py-2 rounded-xl text-sm",
                      "border border-white/10 bg-white/5 dark:bg-white/[0.06]",
                      "text-gray-700 dark:text-white/80",
                      "shadow-sm hover:shadow-md",
                      "transition-colors duration-200 cursor-default",
                      badgeHover,
                    ].join(" ")}
                  >
                    {skill.icon && (
                      <Icon icon={skill.icon} className="text-lg shrink-0" />
                    )}
                    <span>{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
