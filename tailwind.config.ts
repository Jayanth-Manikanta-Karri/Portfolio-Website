import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0D14",
        surface: {
          DEFAULT: "#0F141F",
          secondary: "#141C2B",
          hover: "#1A253A",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.04)",
          highlight: "rgba(6, 182, 212, 0.3)",
        },
        cyan: {
          glow: "#06B6D4",
          bright: "#22D3EE",
          dark: "#0891B2",
        },
        violet: {
          glow: "#8B5CF6",
          bright: "#A78BFA",
          dark: "#7C3AED",
        },
        emerald: {
          glow: "#10B981",
          bright: "#34D399",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(6, 182, 212, 0.3)",
        "glow-violet": "0 0 25px -5px rgba(139, 92, 246, 0.3)",
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};

export default config;
