module.exports = {
  purge: [
    './layouts/**/*.html',
    './assets/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Business card
        'niblue-dark': 'rgb(0, 105, 200)', // dark color at top of water
        'niblue-light': 'rgb(0, 168, 230)', // light color at bottom of water
        niblue: 'rgb(0, 131, 204)', // blue square
        niorange: 'rgb(255, 120, 0)', // orange square
        nidark: 'rgb(32, 32, 32)', // background color
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
