/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#071952",
      secondary: "#64CCC5",
      thirdColor: "#31C48D",
      FourtColor: "#3AA6B9",
      fifthColor: "#ffd700",
      bgColor: "#EBF3FF",
      mainText: "#31C48D",
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
