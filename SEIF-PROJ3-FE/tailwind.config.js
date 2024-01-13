/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx,css}",],
  daisyui: {
    themes: [
      "cupcake",
      "dracula",
      "halloween",
      "forest",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

