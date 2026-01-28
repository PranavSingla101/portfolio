"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-4">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-300 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-white":
                      activeSection === link.name,
                  }
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
                    className={clsx(
                      "bg-gray-100 rounded-full absolute -z-10 dark:bg-gray-800",
                      {
                        "inset-0": link.name !== "Home",
                        "-inset-x-2 inset-y-0": link.name === "Home",
                      }
                    )}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
          <motion.li
            className="h-3/4 flex items-center justify-center relative ml-2"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <button
              className="relative w-[3.5rem] h-[1.75rem] sm:w-[4rem] sm:h-[2rem] rounded-full bg-white/80 dark:bg-gray-950/75 backdrop-blur-[0.5rem] border border-white/40 dark:border-black/40 shadow-lg shadow-black/[0.03] transition-all hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-600/50"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              {/* Track with icons */}
              <div className="absolute inset-0 flex items-center justify-between px-1.5">
                {/* Sun icon on left */}
                <BsSun className={clsx(
                  "text-xs sm:text-sm transition-all",
                  theme === "light"
                    ? "text-gray-950 opacity-70"
                    : "text-gray-500 opacity-30 dark:text-gray-400"
                )} />
                {/* Moon icon on right */}
                <BsMoon className={clsx(
                  "text-xs sm:text-sm transition-all",
                  theme === "dark"
                    ? "text-white opacity-90"
                    : "text-gray-500 opacity-30 dark:text-gray-400"
                )} />
              </div>

              {/* Sliding handle */}
              <motion.div
                className="absolute top-0.5 left-0.5 w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem] rounded-full bg-gray-950 dark:bg-white shadow-md flex items-center justify-center z-10"
                animate={{
                  x: theme === "light" ? 0 : isMobile ? "1.75rem" : "2rem",
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              >
                {theme === "light" ? (
                  <BsSun className="text-white text-xs sm:text-sm" />
                ) : (
                  <BsMoon className="text-gray-950 text-xs sm:text-sm" />
                )}
              </motion.div>
            </button>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
