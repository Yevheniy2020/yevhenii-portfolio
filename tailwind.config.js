/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xlg: { min: '2220px' }, // min-width 1920px
        lg: { max: '1640px' }, // max-width: 1440px
        xmd: { max: '1200px' }, // max-width: 1280px
        md: { max: '960px' }, // max-width: 960pxm
        xsm: { max: '750px' },
        sm: { max: '576px' }, // max-width: 640px
      },
      colors: {
        'white-60': 'rgba(217, 217, 217, 0.6)',
        'white-50': 'rgba(255, 255, 255, 0.1)',
        'black-20':  'rgba(0, 0, 0, 0.2)',
        'shaders': '#E6E2E2',
        'gold': '#FFB800',
        'input': '#D9D9D9',
        'opacity-block': 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        fira: 'var(--font-fira)',
        montserrat: 'var(--font-montserrat)',
      },
      height: {
        blog: 'calc(100vh - 60px)'
      },
      keyframes: {
        'move-twink-back': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-10000px 5000px' },
        },
      },
      animation: {
        'move-twink-back': 'move-twink-back 200s linear infinite',
      },
      textShadow: {
        custom: '0 10px 4px rgba(255, 255, 255, 0.6)',
      },
    },

  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
