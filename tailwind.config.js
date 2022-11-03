/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': "#091109",
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
      'dark-blue': {
        '50': '#f2f8fd',
        '100': '#e5eef9',
        '200': '#c5ddf2',
        '300': '#92c1e7',
        '400': '#57a0d9',
        '500': '#3184c6',
        '600': '#2268a7',
        '700': '#1d5487',
        '800': '#1b4871',
        '900': '#102336',
      },
      "pine": "#1F2F22",
      "hunter": "#3F573E",
      "sage": "#92A888",
      "slate": "#7993A0",
    },
    fontFamily: {
      serif: ["Baskervville"]
    },
    extend: {},
  },
  plugins: [],
}