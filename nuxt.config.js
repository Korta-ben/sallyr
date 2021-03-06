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
    SmtpPass: process.env.SMTPP,
    HubSpotApi : process.env.HAPI,
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
        'src': '//js-eu1.hsforms.net/forms/v2.js',
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
      '~/components/animations',
      '~/components/articles',
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
    '@nuxtjs/google-analytics'

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@braid/vue-formulate/nuxt',
    '@nuxtjs/gtm',
    ['cookie-universal-nuxt', {alias: 'cookieUniversal'}],
    ['nuxt-cookie-control',{
      domain: 'sally-r.com',
      controlButton: false,
      blockIframe: true,
      barPosition: 'bottom-right',
      //default texts
      text: {
        barTitle: 'Cookies',
        barDescription: "We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies. "  ,
        acceptAll: 'Accept all',
        declineAll: 'Delete all',
        manageCookies: 'Manage cookies',
        unsaved: 'You have unsaved settings',
        close: 'Close',
        save: 'Save',
        necessary: 'Necessary cookies',
        optional: 'Optional cookies',
        functional: 'Functional cookies',
        blockedIframe: 'To see this, please enable functional cookies',
        here: 'https://sally-r.com/integritetspolicy'
      }

    }],
    '@nuxtjs/google-analytics'
  ],
  cookies: {
    necessary: [
      {
        name:"Default Cookies",
        description: "Used for cookie control.",
        cookies: ["cookie_control_consent", "cookie_control_enabled_cookies"]
      }
    ],
    optional: [
      {
        name:  'Google Tag Manager',
        //if you don't set identifier, slugified name will be used
        identifier: 'gtm',
        //else
        description:  'Google Tag manager.',
        initialState: true,
        src:  'https://www.googletagmanager.com/gtag/js?id=GTM-N5DJRK2',
        async: true,
        cookies: ["_ga", "_gat_gtag_UA_75786022_1", "_gid"],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag(
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N5DJRK2')
          );

        }
      },

    ]

  },

  gtm: {
    id: 'GTM-N5DJRK2'
  },

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
