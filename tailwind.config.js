/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,css,js,svelte,ts}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      mainColor1: '#FFFFFF',
      mainColor2: '#FD7714',
      mainColor3: '#00529C',
      mainColor4: '#FAFF00',
    },
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      boxShadow: {
        'right-bottom': '10px 10px 10px 0 rgba(0, 0, 0, 0.25)', // Adjust the values as needed
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-17%)' },
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

