"use client";

import React from "react";

/**
 * Fixed, full-viewport backdrop: aurora blobs + dot grid + vignette.
 * Sits behind everything (z-index -1) and never intercepts pointer events.
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-ink-900" />

      {/* Dot grid (fades out toward the bottom) */}
      <div className="absolute inset-x-0 top-0 h-[120vh] dot-grid opacity-70" />

      {/* Aurora blobs */}
      <div
        className="aurora-blob animate-aurora"
        style={{
          width: "55vw",
          height: "55vw",
          top: "-20vw",
          left: "-10vw",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.55), transparent 65%)",
          animationDelay: "0s",
        }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{
          width: "45vw",
          height: "45vw",
          top: "-10vw",
          right: "-12vw",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.4), transparent 65%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{
          width: "40vw",
          height: "40vw",
          top: "35vh",
          left: "30vw",
          background:
            "radial-gradient(circle, rgba(232,121,249,0.28), transparent 65%)",
          animationDelay: "-12s",
        }}
      />

      <div
        className="aurora-blob animate-aurora"
        style={{
          width: "50vw",
          height: "50vw",
          bottom: "-25vw",
          left: "-15vw",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.3), transparent 65%)",
          animationDelay: "-9s",
        }}
      />
      <div
        className="aurora-blob animate-aurora"
        style={{
          width: "45vw",
          height: "45vw",
          bottom: "-20vw",
          right: "-10vw",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35), transparent 65%)",
          animationDelay: "-3s",
        }}
      />

      {/* Vignette so edges fall into black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 20%, transparent 45%, rgba(7,7,13,0.7) 100%)",
        }}
      />
    </div>
  );
}
