/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { Neucha: ["Neucha", "cursive"] },
      boxShadow: {
        "3xl": " 0 2px 24px 0px rgba(0, 0, 0, 0.05)",
        "4xl": " 0 2px 24px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
