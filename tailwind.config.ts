import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        flowpets: {
          forest: "#1B5E20",
          light: "#A5D6A7",
          beige: "#F5F5DC"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
