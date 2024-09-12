/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display'],
        poppins: ['Poppins']
      },
      colors: {
        navitems: '#b0541e',
        btnbg: '#edb970',
        hero: "#F1EBDF",
        features: '#072C27',
        foot: '#F1EBDF'
      }
    },
  },
  plugins: [],
}

