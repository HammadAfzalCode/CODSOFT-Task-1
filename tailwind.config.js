/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "768px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
      xl: "2560px",
    },
    extend: {
      fontFamily: {
        sans: ["Orbitron", "sans-serif"], // Sets Orbitron as the default sans-serif font
      },
      colors: {
        "stroke-color": "#fff", // Define stroke color
      },
    },
  },
  plugins: [],
};
