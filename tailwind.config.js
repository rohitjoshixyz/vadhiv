module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "certificate": "url('../public/certificate.png')",
      },
      fontFamily: {
        damion: ["Damion-Regular", "cursive"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
