/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      bannerImg: "url('https://i.ibb.co.com/syJxJRd/hand-drawn-business-people-illus.png')",
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk", "coffee", "light"],
  },
}
