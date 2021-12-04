module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'jumbotron-image': "url('/src/assets/images/life-live-light-1534795.jpg')",
        'home-image': "url('/src/assets/images/actor-g1c051a08e_1920.jpg')",
      }
    },
    colors: {
      "primary": '#534ab7',
      "secondary": '#fff',
      "bgcolor": '#ebedee'
    },
    minHeight: {
      '300': '300px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
