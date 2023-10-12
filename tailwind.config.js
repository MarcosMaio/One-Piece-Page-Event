/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'customLogo': '250px',
      },
      width: {
        'customCharacter': '5000px',
        'customFlag' : '80px'
      },
      minWidth: {
        'customCharacter': '500px'
      },
      fontSize: {
        'T-1': '3em',
        'P-1':  '1em'
      },
      letterSpacing: {
        'L-Space-1': '1px'
      },
      lineHeight: {
        'L-Height-1' : '25px'
      },
    },
  },
  plugins: [],
}

