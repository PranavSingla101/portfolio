"use client";

import React from "react";
import { motion } from "framer-motion";

/** Thin glowing separator between the hero and the first section. */
export default function SectionDivider() {
  return (
    <motion.div
      aria-hidden
      className="relative my-20 hidden h-24 w-px sm:block"
      initial={{ opacity: 0, scaleY: 0 }}
      whileInView={{ opacity: 1, scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "top" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aurora-violet to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aurora-violet to-transparent blur-sm" />
    </motion.div>
  );
}
