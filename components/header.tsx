"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      {/* ── Desktop pill nav (sm+) ── */}
      <motion.div
        className="hidden sm:flex fixed top-6 left-0 right-0 justify-center pointer-events-none z-[999]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <nav className="flex h-[3.25rem] items-center justify-center rounded-full border border-black/40 bg-gray-950/80 backdrop-blur-[0.5rem] px-3 shadow-lg pointer-events-auto">
        <ul className="flex items-center text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 text-gray-300 hover:text-white transition",
                  { "text-white": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-800 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
        </nav>
      </motion.div>

      {/* ── Mobile nav (below sm) ── */}
      <div className="sm:hidden fixed top-0 left-0 right-0 z-[999]">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 h-14 bg-gray-950/90 backdrop-blur-[0.5rem] border-b border-white/10">
          <span className="text-white font-semibold text-sm tracking-wide">
            Pranav Singla
          </span>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gray-300 p-1.5 rounded-md hover:bg-gray-800/60 transition"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="bg-gray-950/95 backdrop-blur-[0.5rem] border-b border-white/10 divide-y divide-white/5"
            >
              {links.map((link) => (
                <li key={link.hash}>
                  <Link
                    className={clsx(
                      "flex items-center px-5 py-3.5 text-sm font-medium transition",
                      activeSection === link.name
                        ? "text-white bg-indigo-500/10"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      setMenuOpen(false);
                    }}
                  >
                    {activeSection === link.name && (
                      <span className="mr-2.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    )}
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
