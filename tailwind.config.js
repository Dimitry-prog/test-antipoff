/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#151317',
      'white': '#FFFFFF',
      'gray': {
        'light': '#F8F8F8',
        DEFAULT: '#808185',
      },
      'red': '#FF6161',
      'violet': '#512689',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      xs: ['10px', '12px'],
      sm: ['14px', '16px'],
      base: ['16px', '22px'],
      lg: ['20px', '23px'],
      xl: ['32px', '38px'],
      '2xl': ['36px', '42px'],
      '3xl': ['64px', '75px'],
    },
    extend: {},
  },
  plugins: [],
}

