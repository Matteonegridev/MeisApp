/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#daff6f",
        secondary: "#a8aeff",
        tertiary: "#e6e6fa",
        black: "#161616",
        subtext: "#d3d3d3",
        secondSubtext: "#717171",
        secondaryAccent: "#CDD0ED",
        primaryAccent: "#EFFFC3",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/night-sky.jpg')",
      },
      screens: {
        xsm: { max: "650px" },

        md: { min: "651px" },

        lg: { min: "768px", max: "1023px" },

        xl: { min: "1024px", max: "1279px" },

        "2xl": { min: "1280px", max: "1535px" },

        "3xl": { min: "1536px" },
      },
    },
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
      sourceSans: ["Source Sans 3", "sans-serif"],
    },
    keyframes: {
      "fade-out": {
        from: { opacity: 1 },
        to: { opacity: 0 },
      },

      "fade-in": {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
    },
    animation: {
      "fade-out": "fade-out 550ms ease-in-out forwards",
      "fade-in": "fade-in 550ms ease-in-out forwards",
    },
  },
  plugins: [],
};
