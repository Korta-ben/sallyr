module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      srblue: '#164CD6',
      srorange: '#FF981F',
      srskyblue: '#918EFF',
      srgreen: '#94C800',
      srwhite: '#ffffff',
      srblack: '#000000'
    },
    extend: {
      screens: {
        '1.5xl': '1440px'
      },
      spacing: {
        30.25: '121px',
        50: '200px'
      }
    },
    container: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
