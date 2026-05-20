"use client";
import React from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-3xl mx-auto px-6"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          My Experience
        </h2>
        <div className="mx-auto mt-4 w-16 h-0.5 rounded-full bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent" aria-hidden />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-400/20 to-transparent" aria-hidden />

        <div className="space-y-10">
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
              className="relative pl-16"
            >
              {/* Logo bubble */}
              <div className="absolute left-0 top-5 w-10 h-10 rounded-full bg-slate-800 border border-indigo-500/40 shadow-[0_0_12px_rgba(99,102,241,0.25)] flex items-center justify-center overflow-hidden z-10 ring-2 ring-slate-900">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt="company logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-indigo-400 text-lg">{item.icon}</span>
                )}
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-slate-600/40 bg-gradient-to-b from-slate-900 to-slate-950 p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:border-indigo-500/30 hover:shadow-[0_8px_35px_rgba(99,102,241,0.08)] transition-all duration-300">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-3 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    {item.location && (
                      <p className="text-sm text-indigo-400/90 font-medium mt-0.5">
                        {item.location}
                      </p>
                    )}
                  </div>
                  <span className="self-start sm:shrink-0 text-xs font-medium text-slate-400 bg-slate-800/70 border border-slate-700/50 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {item.date}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-slate-700/40 mb-4" />

                {/* Bullet points */}
                <ul className="space-y-2.5">
                  {(Array.isArray(item.description) ? (item.description as unknown as string[]) : [item.description as unknown as string]).map(
                    (point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
                      >
                        <span className="mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400 ring-2 ring-indigo-400/25" aria-hidden />
                        {point}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
