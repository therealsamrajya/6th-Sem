/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#545464",
        button: "#40E0D0",
        buttontext: "#FFFFF0",
        hover: "#FF00FF",
        text: "#EBEBEB",
      },
      fontFamily: {
        "great-vibes": ['"Great Vibes"', "cursive"],
        "merriweather-light": ['"Merriweather"', "serif"],
        "merriweather-regular": ['"Merriweather"', "serif"],
      },
    },
  },
  plugins: [],
};
