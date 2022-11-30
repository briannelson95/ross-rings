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
      //These are final colors
      'heather': {  
        DEFAULT: '#B8C9D1',  
        '50': '#FFFFFF',  
        '100': '#FFFFFF',  
        '200': '#FFFFFF',  
        '300': '#EAEFF1',  
        '400': '#D1DCE1',  
        '500': '#B8C9D1',  
        '600': '#96AFBB',  
        '700': '#7495A5',  
        '800': '#587988',  
        '900': '#425B66'
      },
      'pale-sky': {  
        DEFAULT: '#6B7C84',  
        '50': '#CFD5D8',  
        '100': '#C3CBCF',  
        '200': '#ADB7BC',  
        '300': '#96A4AA',  
        '400': '#809098',  
        '500': '#6B7C84',  
        '600': '#525F65',  
        '700': '#394246',  
        '800': '#202527',  
        '900': '#070808'
      },
      'norway': {  
        DEFAULT: '#9FB59E',  
        '50': '#FFFFFF',  
        '100': '#FBFCFB',  
        '200': '#E4EAE3',  
        '300': '#CDD8CC',  
        '400': '#B6C7B5',  
        '500': '#9FB59E',  
        '600': '#809D7E',  
        '700': '#638162',  
        '800': '#4B614A',  
        '900': '#324132'
      },
      'finlandia': {  
        DEFAULT: '#516D57',  
        '50': '#B1C5B5',  
        '100': '#A5BCAA',  
        '200': '#8EAB94',  
        '300': '#76997E',  
        '400': '#62846A',  
        '500': '#516D57',  
        '600': '#394D3D',  
        '700': '#212D24',  
        '800': '#090C0A',  
        '900': '#000000'
      },
      'firefly': {  
        DEFAULT: '#102336',  
        '50': '#3573B2',  
        '100': '#316AA4',  
        '200': '#285989',  
        '300': '#20476D',  
        '400': '#183552',  
        '500': '#102336',  
        '600': '#0E1E2E',  
        '700': '#0B1926',  
        '800': '#09141E',  
        '900': '#070F17'
      },
      'grey': '#707070'
    },
    fontFamily: {
      'serif': ["Libre Baskerville"],
      'sans': ['ui-sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'myanmar': ['myanmar']
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['18px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    transitionProperty: {
      'width': 'width',
      'height': 'height'
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '250%': '250%',
      '16': '4rem',
    },
    extend: {},
  },
  plugins: [],
}