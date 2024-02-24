/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        secondary: "#333333",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
