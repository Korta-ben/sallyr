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
      srblack: '#000000',
      srback:'#F9F9F9'
    },

    extend: {
      animation: {
        'bounce-slow1': 'bounce-slow1 4s infinite',
        'bounce-slow2': 'bounce-slow2 3s infinite',
        'bounce-slow3': 'bounce-slow3 2s infinite',
        'bounce-astro': 'bounce-astro 6s infinite',
      },
      keyframes: {
        'bounce-astro': {
          "0%":{
            transform: "translateY(-10%)",
            // "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%":{
            transform: "translateY(0)",
            // "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%":{
            transform: "translateY(-10%)",
            // "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          }

        },
        'bounce-slow1': {
          "0%":{
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%":{
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%":{
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          }

        },
        'bounce-slow2': {
          "0%":{
            transform: "translateY(6%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%":{
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%":{
            transform: "translateY(6%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          }

        },
        'bounce-slow3': {
          "0%":{
            transform: "translateY(-4%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%":{
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "100%":{
            transform: "translateY(-4%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          }

        }
      },
      maxWidth:{
        '2xs':'363px',
        107:'428px',
        102:'408px',
        106.5:'427px',
        120:'480px',
        139.25:'557px',
        '2.5xl':'775px',
        'pcards':'797px',
        '3.1xl':'807px',
        '3.2xl':'853px',
        '3.5xl':'876px',

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
        29:'116px',
        30.25: '121px',
        33.75:'135px',
        35.25:'141px',
        42.75:'171px',
        43.5: '174px',
        45.5:'182px',
        49.25:'179px',
        50: '200px',
        58:'232px',
        65: '260px',
        67.5: '270px',
        73.75:'295px',
        75: '300px',
        91.5: '366px',
        111:'444px',
        138.5:'554px',
        199.25:'797px',
        'lgx2':'1200px',
        '1.5xl': '1440px',


      },
      fontSize : {
        12.5:'50px',
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
