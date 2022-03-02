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
        name:  'Google Analitycs',
        //if you don't set identifier, slugified name will be used
        identifier: 'ga',
        //else
        description:  'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
        initialState: true,
        src:  'https://www.googletagmanager.com/gtag/js?id=UA-75786022-1',
        async:  true,
        cookies:["ga", "gat_gtag_UA-75786022-1", "gid"],
        // accepted: () =>{
        //   // window.dataLayer = window.dataLayer || [];
        //   // window.dataLayer.push({
        //   //   'gtm.start': new Date().getTime(),
        //   //   event: 'gtm.js',
        //   //   'config': 'UA-75786022-1'
        //   // });
        //   // window.dataLayer = window.dataLayer || [];
        //   // function gtag() {
        //   //   dataLayer.push(arguments);
        //   // }
        //   // gtag("js", new Date());
        //   // gtag("config", "UA-75786022-1");
        //   // window.dataLayer = window.dataLayer || [];
        //   // function gtag(){dataLayer.push(arguments);}
        //   // gtag('js', new Date());
        //   // gtag('config', 'UA-75786022-1');
        // },
        // declined: () =>{
        // }
      }

    ]

  },
  googleAnalytics: {
    id: 'UA-75786022-1', //Your ID here
    debug: { sendHitTask: true },
    beforeFirstHit (){
      if ($nuxt.$cookieUniversal.get('cookie_control_consent') && $nuxt.$cookieUniversal.get('cookie_control_enabled_cookies') === 'ga'){
        $nuxt.$ga.enable();
      } else {
        $nuxt.$ga.disable();
      }
    }
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
