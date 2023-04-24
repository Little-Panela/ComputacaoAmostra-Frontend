/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
      gridTemplateColumns: {
        "project-cards": "repeat(auto-fill, minmax(330px, 1fr))",
      }
    },
  },
  plugins: [],
};
