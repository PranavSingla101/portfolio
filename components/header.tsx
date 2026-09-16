"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

function Monogram() {
  return (
    <Link
      href="/#home"
      aria-label="Home"
      className="relative grid h-9 w-9 place-items-center rounded-xl overflow-hidden"
    >
      <span className="absolute inset-0 bg-gradient-to-br from-aurora-violet via-aurora-fuchsia to-aurora-cyan opacity-90" />
      <span className="absolute inset-[1px] rounded-[10px] bg-ink-900" />
      <span className="relative font-display font-bold text-sm text-aurora">
        PS
      </span>
    </Link>
  );
}

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // Section anchors only resolve on the home page; prefix "/" elsewhere.
  const hrefFor = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const select = (name: (typeof links)[number]["name"]) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };

  return (
    <header>
      {/* ── Desktop floating nav ── */}
      <motion.div
        className="hidden sm:flex fixed top-5 left-0 right-0 justify-center pointer-events-none z-[999]"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={clsx(
            "pointer-events-auto flex items-center gap-1 rounded-full pl-2 pr-2 py-1.5 transition-all duration-500",
            "glass gradient-border",
            scrolled ? "shadow-glow" : ""
          )}
        >
          <div className="relative z-[2] flex items-center gap-1">
            <Monogram />
            <span className="mx-1 h-5 w-px bg-white/10" aria-hidden />

            <ul className="flex items-center text-[0.85rem] font-medium">
              {links.map((link) => {
                const active = activeSection === link.name;
                return (
                  <li key={link.hash} className="relative">
                    <Link
                      className={clsx(
                        "relative z-10 flex items-center px-3.5 py-2 rounded-full transition-colors duration-300",
                        active ? "text-white" : "text-white/55 hover:text-white"
                      )}
                      href={hrefFor(link.hash)}
                      onClick={() => select(link.name)}
                    >
                      {link.name}
                    </Link>
                    {active && (
                      <motion.span
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10"
                      >
                        <span className="absolute -bottom-px left-1/2 -translate-x-1/2 h-px w-6 bg-gradient-to-r from-transparent via-aurora-fuchsia to-transparent" />
                      </motion.span>
                    )}
                  </li>
                );
              })}
            </ul>

            <Link
              href={hrefFor("#contact")}
              onClick={() => select("Contact")}
              className="ml-1 group relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.8rem] font-semibold text-ink-900 bg-white transition-all duration-300 hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.6)]"
            >
              Let&apos;s talk
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </nav>
      </motion.div>

      {/* ── Mobile nav ── */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-[999]">
        <div
          className={clsx(
            "flex items-center justify-between px-4 h-16 transition-colors duration-300",
            scrolled || menuOpen
              ? "bg-ink-900/85 backdrop-blur-xl border-b border-white/[0.06]"
              : "bg-transparent"
          )}
        >
          <div className="flex items-center gap-3">
            <Monogram />
            <span className="font-display font-semibold text-white text-sm tracking-tight">
              Pranav Singla
            </span>
          </div>
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span
              className={clsx(
                "absolute h-[1.5px] w-5 bg-current transition-all duration-300",
                menuOpen ? "rotate-45" : "-translate-y-[5px]"
              )}
            />
            <span
              className={clsx(
                "absolute h-[1.5px] w-5 bg-current transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : ""
              )}
            />
            <span
              className={clsx(
                "absolute h-[1.5px] w-5 bg-current transition-all duration-300",
                menuOpen ? "-rotate-45" : "translate-y-[5px]"
              )}
            />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-16 bg-ink-900/95 backdrop-blur-2xl"
            >
              <motion.ul
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                }}
                className="flex flex-col px-6 pt-8 gap-1"
              >
                {links.map((link, i) => {
                  const active = activeSection === link.name;
                  return (
                    <motion.li
                      key={link.hash}
                      variants={{
                        hidden: { opacity: 0, x: -16 },
                        show: { opacity: 1, x: 0 },
                      }}
                    >
                      <Link
                        href={hrefFor(link.hash)}
                        onClick={() => {
                          select(link.name);
                          setMenuOpen(false);
                        }}
                        className={clsx(
                          "flex items-baseline gap-4 py-4 border-b border-white/[0.06] font-display text-3xl font-bold tracking-tight transition-colors",
                          active ? "text-white" : "text-white/45"
                        )}
                      >
                        <span className="font-mono text-xs text-aurora-violet tracking-widest">
                          0{i + 1}
                        </span>
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </motion.ul>

              <div className="absolute bottom-10 left-6 right-6">
                <Link
                  href={hrefFor("#contact")}
                  onClick={() => {
                    select("Contact");
                    setMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white text-ink-900 py-4 font-semibold"
                >
                  Let&apos;s talk →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
