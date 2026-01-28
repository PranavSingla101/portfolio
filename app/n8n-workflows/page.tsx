"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { n8nWorkflowsData } from "@/lib/n8n-workflows-data";
import Project from "@/components/project";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

export default function N8NWorkflowsPage() {
   return (
      <main className="flex flex-col items-center">
         <div className="flex flex-col items-center px-4">
            <div className="w-full max-w-[58rem] mt-28 mb-10">
               <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-white/70 hover:text-gray-950 dark:hover:text-white transition mb-8"
               >
                  <BsArrowLeft className="text-xl" />
                  <span>Back to Projects</span>
               </Link>
            </div>

            <section className="scroll-mt-28 mb-28">
               <SectionHeading>N8N WORKFLOWS</SectionHeading>
               <div>
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
