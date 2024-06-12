/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        'full': '9999px',
      },
      fontSize: {
        '8xl': '120px',
        '7xl': '110px',
        '6xl': '100px',
        '5xl': '90px',
        '4xl': '84px',
        '3xl': '80px',
        '2xl': '76px',
        'xl': '72px',
        'lg': '66px',
        'h1': '60px',
        'h2': '42px',
        'h3': '32px',
        'h4': '24px',
        'h5': '20px',
        'p': '18px',
        'ps': '16px',
        '14': '14px',
        '12': '12px',
        '11': '11px',
        '10': '10px'
      },
      letterSpacing: {
        2: '2px',
        3: '3px',
        5: '5px',
        10: '10px',
        15: '15px',
        20: '20px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'cyan': '#00AAEF',
        'plum': '#7F2854',
        'sapphire': '#261F63',
        'sapphire-light': '#3B3572',
        'magenta': '#EC0889',
        'magenta-dim': '#BD006E',
        'cyan-dark': '#0069A7',
        'cyan-darker': '#005578',
        'lime': '#DAED43',
        'tangerine': '#F05918',
        'gray': '#898A8D',
        'pale-gray': '#F7F7F7',
        'blue': '#0663EC',
        "dark-blue":"#01192F",
        "deep-blue":"#000912"
      },
      spacing: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '15': '15px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '25': '25px',
        '30': '30px',
        '32': '32px',
        '35': '35px',
        '40': '40px',
        '42': '42px',
        '45': '45px',
        '50': '50px',
        '55': '55px',
        '60': '60px',
        '90': '90px',
        '120': '120px',
        '150': '150px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '450': '450px',
        '500': '500px'
      }
    },
  },
  plugins: [],
}