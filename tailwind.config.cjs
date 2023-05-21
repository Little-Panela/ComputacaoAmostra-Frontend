/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
        mono: "Roboto Mono, monospace",
        montserrat: "var(--font-montserrat)",
      },
      colors: {
        pallete: {
          primary: "#01E5FB",
          "primary-light": "#05E1FE",
          "primary-dark": "#00A2B8",
          "primary-xdark": "#006D7B",
          "background-blue": "#000B1C",
          "gradient-top": "#05ffff20",
          secondary: "#0F861C",
          "menu-item-start": "#00384F",
          "menu-item-end": "#000B1C",
          "menu-item-selected-end": "#01384E",
        },
      },
      keyframes: {
        // Toast
        "toast-hide": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "toast-slide-in-right": {
          "0%": { transform: `translateX(calc(100% + 1rem))` },
          "100%": { transform: "translateX(0)" },
        },
        "toast-slide-in-bottom": {
          "0%": { transform: `translateY(calc(100% + 1rem))` },
          "100%": { transform: "translateY(0)" },
        },
        "toast-swipe-out-x": {
          "0%": { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          "100%": {
            transform: `translateX(calc(100% + 1rem))`,
          },
        },
        "toast-swipe-out-y": {
          "0%": { transform: "translateY(var(--radix-toast-swipe-end-y))" },
          "100%": {
            transform: `translateY(calc(100% + 1rem))`,
          },
        },
        "card-show": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        // Toast
        "toast-hide": "toast-hide 100ms ease-in forwards",
        "toast-slide-in-right":
          "toast-slide-in-right 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-slide-in-bottom":
          "toast-slide-in-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "toast-swipe-out-x": "toast-swipe-out-x 100ms ease-out forwards",
        "toast-swipe-out-y": "toast-swipe-out-y 100ms ease-out forwards",
        "card-show": "card-show .7s linear forwards",
      },
      gridTemplateColumns: {
        "project-cards": "repeat(auto-fill, minmax(0, 160px))",
        "project-cards-md": "repeat(auto-fit, minmax(256px, 1fr))",
        "voting-cards": "1fr 400px",
        program: "1fr minmax(0, 500px)",
      },
      backgroundImage: {
        "about-linear":
          "linear-gradient(180deg, rgba(0,11,28,1) 0%, rgba(0,11,28,0.9) 20%, rgba(0,11,28,0) 50%, rgba(0,11,28,0.7) 85%, rgba(0,11,28,1) 100%), url('/static/img/about-background.png')",
        "about-linear-md":
          "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%), url('/static/img/about-background-md.png')",
        "dots-1": "url('/static/img/dots_technology_green_top.png')",
        "dots-2": "url('/static/img/dots_technology_green_bottom.png')",
      },
    },
  },
  plugins: [require("tailwindcss-radix")],
};
