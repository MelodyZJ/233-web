/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          primary: "#0C5FFF",
        },
      },
    },
  },
  plugins: [],
};
