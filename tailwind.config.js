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
        "colour-dark-2": "#4E4A47",
        "colour-light": "#E5E1DB",
        "colour-secondary": "#927E6C",
        "colour-2":"#a59a89",
        "colour-3":"#baac9a",
        "colour-4":"#ccbfad",
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
