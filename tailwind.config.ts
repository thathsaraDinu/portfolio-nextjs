import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollMargin: {
        navbar: "50px", // Define your custom value
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class", // Enables class-based dark mode
  plugins: [
    function ({
      addComponents,
    }: {
      addComponents: (
        components: Record<string, Record<string, string>>
      ) => void;
    }) {
      addComponents({
        ".custom-top-topic": {
          color: "#004d04", // Custom color (e.g., custom blue)
          fontSize: "1rem", // Custom font size (e.g., small)
          fontWeight: "400", // Custom font weight (e.g., normal)
          fontFamily: "outfit", // Custom font family (e.g., Josefin Sans)
          textAlign: "center",
        },
        ".custom-second-topic": {
          color: "#030042", // Custom color (e.g., custom green)
          fontSize: "2rem", // Custom font size (e.g., large)
          fontWeight: "700", // Custom font weight (e.g., semi-bold)
          fontFamily: "raleway", // Custom font family (e.g., Outfit)
          textAlign: "center",
        },
        ".custom-third-topic": {
          color: "#0900b0", // Custom color (e.g., custom blue)
          fontSize: "1.5rem", // Custom font size (e.g., medium-large)
          fontWeight: "600", // Custom font weight (e.g., semi-bold)
          fontFamily: "outfit", // Custom font family (e.g., Raleway)
          textAlign: "center",
        },
      });
    },
  ],
} satisfies Config;
