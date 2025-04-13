// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}', // 👈 solo esto
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // 👈 este sí es válido
  ],
};
