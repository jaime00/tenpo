// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}', // 👈 solo esto
  ],
  theme: {
    extend: {
      colors: {
        mainPurple: '#673ab7',
      },
      keyframes: {
        'fade-in-keyframe': {
          '0%': { opacity: 0.7, transform: 'translateY(0px) scale(0.99)' },
          '100%': { opacity: 1, transform: 'translateY(0px) scale(1)' },
        },
      },
      animation: {
        fade: 'fade-in-keyframe 1s ease-out forwards',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // 👈 este sí es válido
  ],
};
