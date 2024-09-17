/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-bg': "url('/hero-bg.png')",
        'banner': "url('/banner.png')",
        'videoThumbnail': "url('/chef.png')",
        'menu-bg': "url('/menu-bg.png')",
        'client-bg': "url('/client-bg.png')",
        'visit-us-bg': "url('/visit-us-bg.png')",
      }
    },
    fontFamily:{
      inter:["Inter"]
    },
    colors:{
      'primary':'#F79233',
      'white':'#ffffff',
      'black':'#000000'
    },
    keyframes: {
      scaleInOut: {
        '0%': { transform: 'scale(0.5)' },
        '100%': { transform: 'scale(1)' },
      },
    },
    animation: {
      scaleInOut: 'scaleInOut 2s ease-in-out infinite',
    },
  },
  plugins: [],
}

