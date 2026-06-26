import type { Config } from "tailwindcss";

/**
 * Brand palette = "Jaws Painting — Navy / Red / White" (matches the logo).
 * Deep navy dominates the structure; a clean red is the single accent + CTA color;
 * white and off-white give the layout breathing room.
 *   ink    → navy base / dark bands / background     (#0A1F44)
 *   panel  → raised navy surfaces (cards on dark)
 *   chrome → RED accent + primary CTA (white text reads AA) (#C5161D)
 *   bone   → off-white section backgrounds + text on navy   (#F4F4F2)
 *   steel  → muted blue-gray (secondary text on navy)
 *   reflect→ secondary sky-blue (used sparingly)
 * Token names are intentionally semantic so the whole site re-skins from here,
 * and they never shadow Tailwind's default color scales. Pure white (#FFFFFF)
 * surfaces come from Tailwind's built-in `white`.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./site.config.ts",
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0A1F44", deep: "#06142E", raised: "#0F2A56" },
        panel: { DEFAULT: "#112A52", light: "#1B3C68", dark: "#0B1E40" },
        chrome: {
          DEFAULT: "#C5161D", // brand red — accent + primary CTA (white text reads AA)
          dark: "#9E1118",
          light: "#E0353C",
          deep: "#8E0F15", // on-light eyebrows/icons: ~8:1 on bone (AA)
        },
        bone: { DEFAULT: "#F4F4F2", dark: "#E6E6E2" },
        steel: { DEFAULT: "#8C9CB5", dark: "#6C7E99", light: "#AEBDD2" },
        reflect: { DEFAULT: "#5B7FB0", dark: "#3F6298", light: "#88A6CD" },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
