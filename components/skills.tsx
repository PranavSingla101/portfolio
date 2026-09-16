"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Card from "./card";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import clsx from "clsx";

type Accent = {
  /** `r g b` triple for the spotlight + glows */
  rgb: string;
  /** Tailwind gradient stops for the header chip */
  gradient: string;
  /** Category icon */
  icon: string;
  /** Bento span on lg+ (6-column grid) */
  span: string;
};

const ACCENTS: Record<string, Accent> = {
  "AI & LLMs": {
    rgb: "232 121 249",
    gradient: "from-fuchsia-400 to-violet-500",
    icon: "material-symbols:neurology",
    span: "lg:col-span-3",
  },
  "Automation & Workflows": {
    rgb: "251 191 36",
    gradient: "from-amber-300 to-orange-500",
    icon: "material-symbols:bolt",
    span: "lg:col-span-3",
  },
  Languages: {
    rgb: "34 211 238",
    gradient: "from-cyan-300 to-sky-500",
    icon: "material-symbols:code",
    span: "lg:col-span-2",
  },
  "Libraries & Frameworks": {
    rgb: "163 230 53",
    gradient: "from-lime-300 to-emerald-500",
    icon: "material-symbols:deployed-code",
    span: "lg:col-span-2",
  },
  "Databases & Tools": {
    rgb: "251 113 133",
    gradient: "from-rose-300 to-pink-500",
    icon: "material-symbols:database",
    span: "lg:col-span-2",
  },
  "CS Fundamentals": {
    rgb: "139 92 246",
    gradient: "from-violet-300 to-indigo-500",
    icon: "material-symbols:account-tree",
    span: "lg:col-span-6",
  },
};

const FALLBACK: Accent = {
  rgb: "139 92 246",
  gradient: "from-violet-300 to-indigo-500",
  icon: "material-symbols:star",
  span: "lg:col-span-2",
};

// Render order tuned for the bento layout (3+3, 2+2+2, 6).
const ORDER = [
  "AI & LLMs",
  "Automation & Workflows",
  "Languages",
  "Libraries & Frameworks",
  "Databases & Tools",
  "CS Fundamentals",
];

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const groups = [...skillsData].sort(
    (a, b) => ORDER.indexOf(a.category) - ORDER.indexOf(b.category)
  );

  return (
    <section
      id="skills"
      ref={ref}
      className="relative mx-auto mb-32 sm:mb-40 w-full max-w-7xl scroll-mt-28 px-6"
    >
      <SectionHeading eyebrow="02 — Toolkit" accent="Skills">
        Technical
      </SectionHeading>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
        {groups.map((group, gi) => {
          const a = ACCENTS[group.category] ?? FALLBACK;
          const wide = a.span === "lg:col-span-6";

          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.06 * gi, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={clsx("h-full", a.span, wide && "md:col-span-2")}
            >
              <Card
                radius="3xl"
                elevation="high"
                hover="glow"
                spotColor={a.rgb}
                className="h-full p-6 sm:p-7"
              >
                {/* Corner glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-40"
                  style={{ background: `rgba(${a.rgb} / 0.35)` }}
                />

                <div
                  className={clsx(
                    "flex gap-5",
                    wide ? "flex-col lg:flex-row lg:items-center" : "flex-col"
                  )}
                >
                  {/* Header */}
                  <div className={clsx("flex items-center gap-3", wide && "lg:w-64 lg:shrink-0")}>
                    <span
                      className={clsx(
                        "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-ink-900 shadow-lg",
                        a.gradient
                      )}
                    >
                      <Icon icon={a.icon} className="text-xl" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-white">
                        {group.category}
                      </h3>
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-white/35">
                        {group.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Chips */}
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill, si) => (
                      <motion.li
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.06 * gi + 0.03 * si,
                          duration: 0.35,
                          ease: "easeOut",
                        }}
                        whileHover={{ y: -3, scale: 1.04 }}
                        className="group/chip flex cursor-default items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-sm text-white/75 transition-colors duration-300"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = `rgba(${a.rgb} / 0.55)`;
                          e.currentTarget.style.boxShadow = `0 0 24px -6px rgba(${a.rgb} / 0.45)`;
                          e.currentTarget.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "";
                          e.currentTarget.style.boxShadow = "";
                          e.currentTarget.style.color = "";
                        }}
                      >
                        {skill.icon && (
                          <Icon icon={skill.icon} height={16} className="shrink-0" />
                        )}
                        <span>{skill.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
