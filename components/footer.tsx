import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  { label: "GitHub", href: "https://github.com/PranavSingla101", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pranavsingla202/", icon: BsLinkedin },
  { label: "Email", href: "mailto:pranavsingla202@gmail.com", icon: HiOutlineMail },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-white/[0.06]">
      {/* Glow under the footer */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-aurora-line opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-[-40%] h-[60%] w-[80%] -translate-x-1/2 rounded-full bg-aurora-violet/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16">
        {/* Giant wordmark */}
        <p
          aria-hidden
          className="select-none font-display text-[clamp(2.5rem,9vw,7rem)] font-extrabold leading-none tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.12] to-white/[0.02]"
        >
          Pranav Singla
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-aurora-violet/50 hover:text-white hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora-violet"
            >
              <Icon className="text-lg" />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-white/45">
            &copy; {new Date().getFullYear()} Pranav Singla. All rights reserved.
          </p>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-white/25">
            Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
