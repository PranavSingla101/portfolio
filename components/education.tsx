"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import pecLogo from "@/public/Pec logo cleaned.png";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <motion.div
        className="mt-10 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 transition hover:bg-gray-200"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="pt-6 pb-7 px-5 md:pl-10 md:pr-10 md:pt-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start">
          <div className="flex-shrink-0">
            <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-white dark:bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden">
              <Image 
                src={pecLogo} 
                alt="Punjab Engineering College Logo" 
                width={150} 
                height={150}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-950 dark:text-white">
              Bachelor of Technology in Computer Science and Engineering
            </h3>
            <p className="text-lg font-medium text-gray-700 dark:text-white/80 mb-2">
              Punjab Engineering College
            </p>
            <p className="text-gray-600 dark:text-white/70">
              August 2023 – September 2027
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
