/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        nazla: ['"Nazla Display"', 'cursive'],
        derringer: ['"Derringer Serial"', 'serif'],
      },
    },
  },
  plugins: [],
}
