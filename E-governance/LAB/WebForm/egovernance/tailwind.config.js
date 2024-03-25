/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003366",
        secondary: "#FFFFFF",
        one: "#FFD700",
        two: "#006600",
      },
    },
  },
  plugins: [],
};
