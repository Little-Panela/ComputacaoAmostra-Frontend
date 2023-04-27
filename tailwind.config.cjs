/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },

      animation: {
        'overlayShow': 'overlayShow 150ms ease-in-out',
        'contentShow': 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },

      keyframes: {
        contentShow: {
          to: {
            opacity: 1,
            transform: "transform: translate(-50%, -48%) scale(0.96)",
          },
          from: {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)"
          },
        },
        overlayShow: {
          to: { opacity: 0 },
          from: { opacity: 1 },
        }
      },
      gridTemplateColumns: {
        "project-cards": "repeat(auto-fill, minmax(330px, 1fr))",
      },
    },
  },
  plugins: [],
};
