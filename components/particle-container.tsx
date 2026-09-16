"use client";

import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticleContainer: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        fullScreen: { enable: false },
        detectRetina: true,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: { distance: 160, links: { opacity: 0.35 } },
          },
        },
        particles: {
          color: { value: ["#c4b5fd", "#e879f9", "#67e8f9"] },
          links: {
            color: "#a78bfa",
            distance: 140,
            enable: true,
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            direction: "none",
            outModes: { default: "out" },
            random: true,
            speed: 0.6,
            straight: false,
          },
          number: { density: { enable: true, area: 900 }, value: 55 },
          opacity: {
            value: { min: 0.15, max: 0.6 },
            animation: { enable: true, speed: 0.6, sync: false },
          },
          shape: { type: "circle" },
          size: { value: { min: 0.8, max: 2.2 } },
        },
      }}
    />
  );
};

export default ParticleContainer;
