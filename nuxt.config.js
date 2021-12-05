export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  server: {
    port: 8000 // default: 3000
  },
  publicRuntimeConfig: {
    PostMarkKey: process.env.PM_KEY
  },
  head: {
    title: 'sallyr',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    '@braid/vue-formulate/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@braid/vue-formulate/nuxt',
    ['nuxt-mail', {
      message: [
        { name: 'contact' },
        { name: 'calculate' }
      ],
      smtp: {
        host: 'smtp.postmarkapp.com',
        port: 2525,
        auth: {
          user: 'd1f5cb47-3071-41be-a8d2-887be1b0f663',
          pass: 'd1f5cb47-3071-41be-a8d2-887be1b0f663'
        },
      },
    }],
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
    baseURL: 'https://sr-stage.kortaben.work/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
