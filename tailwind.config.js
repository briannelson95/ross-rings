/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': "#000000",
      "white": "#ffffff",
      'light-blue': {
        '50': '#f0f9ff',
        '100': '#e1f2fe',
        '200': '#bae5fd',
        '300': '#7dd1fc',
        '400': '#38baf8',
        '500': '#0ea2e9',
        '600': '#0281c7',
        '700': '#0367a1',
        '800': '#075785',
        '900': '#0c496e',
      },
      'light-blue': {
        '50': '#f0f9ff',
        '100': '#e1f2fe',
        '200': '#bae5fd',
        '300': '#7dd1fc',
        '400': '#38baf8',
        '500': '#0ea2e9',
        '600': '#0281c7',
        '700': '#0367a1',
        '800': '#075785',
        '900': '#0c496e',
      },
    },
    extend: {},
  },
  plugins: [],
}