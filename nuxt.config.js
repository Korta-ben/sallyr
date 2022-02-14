export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  server: {
         port: 8100, // default: 3000
       host: '0.0.0.0'
  },
  serverMiddleware: ["~/server-middleware/mailer.js", "~/server-middleware/calculatorMailer.js",
    // { path: '/server-middleware', handler: '~/server-middleware/calculatorMailer.js' },
    // { path: '/server-middleware', handler: '~/server-middleware/calculatorMailer.js' }
  ],
  publicRuntimeConfig: {
    PostMarkKey: process.env.PM_KEY,
    SmtpUser: process.env.SMTPU,
    SmtpPass: process.env.SMTPP
  },
  head: {

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    script: [
      {
        'type': 'text/javascript',
        'src': 'https://www.googletagmanager.com/gtag/js?id=UA-75786022-1',
        'async':true
      }

    ]
  },
  router: {
    linkActiveClass: 'current-page'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/blocks',
      '~/components/structure',
      '~/components/animations'
    ]
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {}
  },


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@braid/vue-formulate/nuxt',
    // '@nuxtjs/google-analytics'

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@braid/vue-formulate/nuxt',
    // '@nuxtjs/google-analytics'
  ],

  formulate:{
    options:{
      useInputDecorators: false
    }
  },

  googleFonts: {
    families: {
      'Kumbh+Sans': {
        wght: [100,200,300,400,500,600,700,800]
      },
      Raleway: {
        wght: [100,200,300,400,500,600,700,800]
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://sally-r.com/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },


}
