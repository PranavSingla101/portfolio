"use client";

import React from "react";
import { n8nWorkflowsData } from "@/lib/n8n-workflows-data";
import Project from "@/components/project";
import ParticleContainer from "@/components/particle-container";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";

export default function N8NWorkflowsPage() {
   return (
      <main className="flex flex-col items-center">
         {/* ── Hero / Header — matches Intro section style ── */}
         <section className="particles-section w-full text-center pt-28 pb-14 sm:pt-36 sm:pb-16 px-4 relative">
            <ParticleContainer />

            {/* Page title */}
            <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
            >
               N8N Workflows
            </motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="mt-3 text-white/50 text-base max-w-xl mx-auto"
            >
            </motion.p>
         </section>

         {/* ── Workflow cards — same container as main page projects ── */}
         <div className="flex flex-col items-center px-4 w-full">
            <section className="mb-28 max-w-[90rem] w-full mx-auto scroll-mt-28 px-2 sm:px-6">
               {/* Back button — styled like primary CTA, positioned just above first project */}
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="mb-8 flex justify-start"
               >
                  <Link
                     href="/#projects"
                     className="inline-flex items-center gap-2 bg-indigo-500 text-white py-2.5 px-5 rounded-xl text-sm sm:text-base font-semibold hover:bg-indigo-400 transition active:scale-[0.98] shadow-[0_10px_25px_rgba(15,23,42,0.7)]"
                  >
                     <BsArrowLeft className="text-base" />
                     Go Back
                  </Link>
               </motion.div>

               <div className="flex flex-col gap-20 sm:gap-24 lg:gap-28">
                  {n8nWorkflowsData.map((workflow, index) => (
                     <React.Fragment key={index}>
                        <Project {...workflow} />
                     </React.Fragment>
                  ))}
               </div>
            </section>
         </div>
      </main>
   );
}
