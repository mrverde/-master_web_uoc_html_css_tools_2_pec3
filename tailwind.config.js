module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'jumbotron-image': "url('/src/assets/images/life-live-light-1534795.jpg')",
        'home-image': "url('/src/assets/images/actor-g1c051a08e_1920.jpg')",
      }
    },
    colors: {
      primary: '#534ab7',
      secondary: '#4b4a51',
      bgcolor: '#ebedee',
      white: '#fff',
      black: '#000'
    },
    textColor: {
      white: '#fff',
      black: '#000',
      hoverColor: '#aaa',
      red: '#d00'
    },
    minHeight: {
      '300': '300px'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      'mx2xl': { 'max': '1535px' },
      'mxxl': { 'max': '1279px' },
      'mxlg': { 'max': '1023px' },
      'mxmd': { 'max': '767px' },
      'mxsm': { 'max': '639px' },
    },
    maxWidth: {
      'fullhd': '1920px',
      'lg': '32rem',
      '5xl': '64rem'
    },
    fontFamily: {
      'primary': ["-apple-system", "blinkmacsystemfont", "Segoe UI", "roboto",
        "Helvetica Neue", "arial", "sans-serif", "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol"],
      'secondary': ["anton", "sans-serif"],
    },
    backgroundPosition: {
      "min60": '60%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
