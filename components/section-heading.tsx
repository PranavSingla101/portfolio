"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type SectionHeadingProps = {
  /** Small mono label above the title, e.g. "01 — Projects". */
  eyebrow?: string;
  children: React.ReactNode;
  /** Optional word rendered in the italic serif accent after the title. */
  accent?: string;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  children,
  accent,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "mb-14 sm:mb-16 flex flex-col gap-4",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.25em] uppercase text-white/50">
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-aurora-violet" />
          {eyebrow}
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-aurora-cyan" />
        </span>
      )}

      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] text-white leading-[1.05]">
        {children}
        {accent && (
          <>
            {" "}
            <span className="font-serif italic font-normal text-aurora">
              {accent}
            </span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={clsx(
            "text-white/55 text-base sm:text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
