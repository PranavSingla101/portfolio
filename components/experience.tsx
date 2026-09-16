"use client";
import React from "react";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./card";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="relative mx-auto mb-32 sm:mb-40 w-full max-w-4xl scroll-mt-28 px-6"
    >
      <SectionHeading eyebrow="03 — Journey" accent="Experience">
        Professional
      </SectionHeading>

      <div className="relative">
        {/* Spine */}
        <div
          aria-hidden
          className="absolute left-[1.35rem] top-4 bottom-4 w-px bg-gradient-to-b from-aurora-violet via-aurora-fuchsia/40 to-transparent sm:left-1/2 sm:-translate-x-1/2"
        />

        <div className="space-y-10 sm:space-y-14">
          {experiencesData.map((item, index) => {
            const points = Array.isArray(item.description)
              ? (item.description as unknown as string[])
              : [item.description as unknown as string];
            const left = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-16 sm:pl-0"
              >
                {/* Node */}
                <div className="absolute left-0 top-6 z-10 sm:left-1/2 sm:-translate-x-1/2">
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-full bg-aurora-violet/30 blur-lg" />
                    <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-white/15 bg-ink-800 shadow-glow ring-4 ring-ink-900">
                      {item.logo ? (
                        <Image
                          src={item.logo}
                          alt={`${item.location} logo`}
                          width={44}
                          height={44}
                          className="h-full w-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-aurora-violet text-lg">{item.icon}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Date (desktop, opposite side) */}
                <div
                  className={`hidden sm:flex absolute top-7 w-[calc(50%-3rem)] ${
                    left ? "left-[calc(50%+3rem)] justify-start" : "right-[calc(50%+3rem)] justify-end"
                  }`}
                >
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">
                    {item.date}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`sm:w-[calc(50%-3rem)] ${left ? "" : "sm:ml-auto"}`}
                >
                  <Card radius="3xl" elevation="high" hover="glow" className="p-6 sm:p-7">
                    <div className="mb-4">
                      <h3 className="font-display text-xl font-bold tracking-tight text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-aurora">
                        {item.location}
                      </p>
                      <span className="mt-3 inline-block sm:hidden font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
                        {item.date}
                      </span>
                    </div>

                    <div className="mb-4 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                    <ul className="space-y-2.5">
                      {points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm leading-relaxed text-white/70"
                        >
                          <span
                            className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-aurora-violet to-aurora-cyan shadow-[0_0_10px_rgba(139,92,246,0.7)]"
                            aria-hidden
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
