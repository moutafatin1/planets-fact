/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#070724",
        arsenic: "#38384F",
        silver: "#838391",
        divider: "#979797",
        mercury: "#DEF4FC",
        venus: "#F7CC7F",
        earth: "#545BFE",
        mars: "#FF6A45",
        jupiter: "#ECAD7A",
        saturn: "#FCCB6B",
        uranus: "#65F0D5",
        neptune: "#497EFA",
      },
      backgroundImage: {
        main: "url('/background-stars.svg')",
      },
    },
  },
  plugins: [],
};
