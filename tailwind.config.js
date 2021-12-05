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
    fontFamily: {
      'primary': ["-apple-system", "blinkmacsystemfont", "Segoe UI", "roboto",
        "Helvetica Neue", "arial", "sans-serif", "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol"],
      'secondary': ["anton", "sans-serif"],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
