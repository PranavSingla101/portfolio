"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,42rem)] text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Contact Me
        </h2>
        <div className="mx-auto mt-4 w-16 h-0.5 rounded-full bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent" aria-hidden />
      </div>

      <p className="text-slate-400 mb-10 text-sm sm:text-base leading-relaxed">
        Reach me directly at{" "}
        <a
          className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors"
          href="mailto:pranavsingla202@gmail.com"
        >
          pranavsingla202@gmail.com
        </a>{" "}
        or send a message below.
      </p>

      {/* Card */}
      <div className="rounded-3xl border border-slate-600/40 bg-gradient-to-b from-slate-900 to-slate-950 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] p-8 sm:p-10 text-left">
        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully!");
          }}
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Your Email
            </label>
            <input
              className="h-12 px-4 rounded-xl bg-slate-800/60 border border-slate-600/50 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-indigo-500/70 focus:ring-1 focus:ring-indigo-500/40 transition-all"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Message
            </label>
            <textarea
              className="h-44 px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-600/50 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-indigo-500/70 focus:ring-1 focus:ring-indigo-500/40 transition-all resize-none"
              name="message"
              placeholder="What's on your mind?"
              required
              maxLength={5000}
            />
          </div>

          <div className="pt-1">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </motion.section>
  );
}
