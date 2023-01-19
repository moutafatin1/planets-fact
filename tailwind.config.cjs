/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#070724",
        arsenic: "#38384F",
        silver: "#838391",
      },
      backgroundImage: {
        main: "url('/background-stars.svg')",
      },
    },
  },
  plugins: [],
};
