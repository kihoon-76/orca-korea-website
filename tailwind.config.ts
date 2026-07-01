import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07131f",
        navy: "#0b1b2b",
        ocean: "#123348",
        forest: "#0f3a32",
        mint: "#28b69a",
        gold: "#c9a45b",
        mist: "#eef5f1",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(7, 19, 31, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
