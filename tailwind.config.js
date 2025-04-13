/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
      './node_modules/flowbite/**/*.js' // 👈 Required for Flowbite
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#4f46e5', // Indigo
            dark: '#4338ca',
          },
          accent: '#22d3ee', // Cyan
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          heading: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [
      require('flowbite/plugin') // 👈 Include Flowbite as a plugin
    ],
  }
  