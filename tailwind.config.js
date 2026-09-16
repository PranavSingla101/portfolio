/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-inter)", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#050509",
          900: "#07070d",
          800: "#0c0c15",
          700: "#12121d",
          600: "#1a1a28",
          500: "#242435",
        },
        aurora: {
          violet: "#8b5cf6",
          fuchsia: "#e879f9",
          cyan: "#22d3ee",
          amber: "#fbbf24",
          rose: "#fb7185",
          lime: "#a3e635",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "aurora-text":
          "linear-gradient(120deg, #c4b5fd 0%, #e879f9 40%, #67e8f9 100%)",
        "aurora-line":
          "linear-gradient(90deg, transparent, #8b5cf6, #e879f9, #22d3ee, transparent)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(139, 92, 246, 0.45)",
        "glow-lg": "0 0 80px -20px rgba(139, 92, 246, 0.55)",
        "glow-cyan": "0 0 40px -10px rgba(34, 211, 238, 0.45)",
        "glow-fuchsia": "0 0 40px -10px rgba(232, 121, 249, 0.45)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.7)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(6%, -4%) scale(1.08)" },
          "66%": { transform: "translate(-4%, 6%) scale(0.96)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "spin-slow": "spinSlow 8s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
