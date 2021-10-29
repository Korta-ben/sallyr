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
      srlightestblue:'#F1F2F8',
      srblack: '#000000'
    },

    extend: {
      maxWidth:{
        107:'428px',
        102:'408px',
        139.25:'557px',

      },
      screens: {
        'xg': '1152px',
        '1.5xl': '1440px',
        '1.5lg': '1200px',
      },
      spacing: {
        7.5:'30px',
        8.5:'34px',
        9.5:'38px',
        11.5:'46px',
        12.75: '51px',
        15:'60px',
        17.5:'70px',
        21.75:'87px',
        23.25:'93px',
        25:'100px',
        27.25:'109px',
        30.25: '121px',
        33.75:'135px',
        42.75:'171px',
        43.5: '174px',
        45.5:'182px',
        49.25:'179px',
        50: '200px',
        65: '260px',
        'lgx2':'1200px',
        '1.5xl': '1440px',


      },
      fontSize : {
        '6.5xl': '55px',
        22.5:'90px',
      },
      lineHeight: {
        '11': '61px',
        4.5:'18px',
        13.75:'55px',
        25:'100px',


      }
    },
    container: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
