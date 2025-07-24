/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        "dm-serif": ['"DM Serif Display"', "serif"],
        "patrick-hand": ['"Patrick Hand"', "cursive"],
        cormorant: ['"Cormorant"', "serif"],
        syncopate: ['"Syncopate"', "sans-serif"],
        cinzel: ['"Cinzel"', "serif"],
        lora: ['"Lora"', "serif"],
        "rock-salt": ['"Rock Salt"', "cursive"],
        specimen: ['"Specimen"', "serif"],
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
      },
      backgroundImage: {
        'gradient-animated': 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
      },
    },
  },
  plugins: [],
}