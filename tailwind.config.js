/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C5FFF",
        grayB3B3B3: "#B3B3B3",
      },
    },
  },
  plugins: [],
};
