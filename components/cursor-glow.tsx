"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

/**
 * Soft radial glow that trails the pointer. Desktop-only (fine pointer);
 * disabled for touch devices and reduced-motion users.
 */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 200, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 30, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  const background = useMotionTemplate`radial-gradient(500px circle at ${sx}px ${sy}px, rgba(139,92,246,0.10), rgba(34,211,238,0.04) 35%, transparent 60%)`;

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 mix-blend-screen"
      style={{ background }}
    />
  );
}
