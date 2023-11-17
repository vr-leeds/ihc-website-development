/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk,css}",
    "./main.js"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "colour-primary": "#3E3A37",
        "colour-primary-lighter": "#65615F",
        "colour-dark": "#3E3A37",
        "colour-light": "#E5E1DB",
        "colour-secondary": "#927E6C",
        "colour-accent": "#89A79A",
        "colour-neutral": "#E5E1DB",
        "colour-text-main": "#353535",
      }
    },
    fontFamily: {
      sans: ['Commissioner', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      commy: ['Commissioner']
    },
  },
}
