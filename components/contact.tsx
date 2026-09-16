"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";
import { BsLinkedin, BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Card from "./card";
import SectionHeading from "./section-heading";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white placeholder:text-white/30 transition-all duration-300 focus:outline-none focus:border-aurora-violet/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-aurora-violet/10";

const channels = [
  {
    label: "Email",
    value: "pranavsingla202@gmail.com",
    href: "mailto:pranavsingla202@gmail.com",
    icon: HiOutlineMail,
  },
  {
    label: "GitHub",
    value: "PranavSingla101",
    href: "https://github.com/PranavSingla101",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "pranavsingla202",
    href: "https://www.linkedin.com/in/pranavsingla202/",
    icon: BsLinkedin,
  },
];

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <section
      id="contact"
      ref={ref}
      className="relative mx-auto mb-24 sm:mb-32 w-full max-w-6xl scroll-mt-28 px-6"
    >
      <SectionHeading eyebrow="05 — Contact" accent="together">
        Let&apos;s build
      </SectionHeading>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-6 lg:grid-cols-5"
      >
        {/* Left: copy + channels */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          <Card radius="3xl" elevation="high" spotColor="232 121 249" className="flex-1 p-7 sm:p-8">
            <p className="font-display text-2xl font-bold tracking-tight text-white leading-snug">
              Have an idea, an internship, or just want to say hi?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Reach me directly at{" "}
              <a
                className="text-aurora font-medium underline decoration-aurora-fuchsia/40 underline-offset-4 transition hover:decoration-aurora-fuchsia"
                href="mailto:pranavsingla202@gmail.com"
              >
                pranavsingla202@gmail.com
              </a>{" "}
              or send a message using the form.
            </p>

            <ul className="mt-8 space-y-2">
              {channels.map(({ label, value, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-aurora-violet/20 to-aurora-cyan/10 text-white/80 transition-colors group-hover:text-white">
                      <Icon className="text-lg" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/35">
                        {label}
                      </span>
                      <span className="block truncate text-sm text-white/80">{value}</span>
                    </span>
                    <BsArrowUpRight className="shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Right: form */}
        <Card radius="3xl" elevation="high" className="p-7 sm:p-9 lg:col-span-3">
          <form
            className="flex h-full flex-col gap-5"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);
              if (error) {
                toast.error(error);
                return;
              }
              toast.success("Email sent successfully!");
            }}
          >
            <div className="flex flex-col gap-2">
              <label className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
                Your Email
              </label>
              <input
                className={`${inputCls} h-12`}
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <label className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
                Message
              </label>
              <textarea
                className={`${inputCls} min-h-[11rem] flex-1 resize-none py-3`}
                name="message"
                placeholder="What's on your mind?"
                required
                maxLength={5000}
              />
            </div>

            <div className="flex justify-end pt-1">
              <SubmitBtn />
            </div>
          </form>
        </Card>
      </motion.div>
    </section>
  );
}
