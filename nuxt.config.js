module.exports = {
  mode: "universal",
  /*
  ** Headers of the page
  */
  head: {
    title: 'bv-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  plugins: [
    { src: "~/plugins/google-maps", ssr: true },
    { src: '~/plugins/youtube', ssr: false }
  ],
  build: {
    transpile: [/^vue2-google-maps($|\/)/, 'vue-youtube-embed'],

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss']
  },
  scss: [
    '~/assets/variables.scss',
  ],
  // css: [
  //   '~/assets/transition.css'
  // ],
  pageTransition: {
    name: "fade",
    mode: "out-in"
  },
  // layoutTransition: {
  //   name: "fade",
  //   mode: "out-in"
  // },
  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxt/http',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAzu641YEewkYY6zzS8nAzTxY6XDLxCCkY",
          authDomain: "blv-nuxt.firebaseapp.com",
          databaseURL: "https://blv-nuxt.firebaseio.com",
          projectId: "blv-nuxt",
          storageBucket: "blv-nuxt.appspot.com",
          messagingSenderId: "914677080234",
          appId: "1:914677080234:web:e53c9fe43cf20ae99b30d3",
          measurementId: "G-C255H418QC"
        },
        services: {
          auth: true,
          firestore: true,
          // functions: true,
          storage: true,
          // realtimeDb: true,
          // messaging: true,
          // performance: true,
          analytics: true,
          remoteConfig: true
        }
      }
    ]
  ],
  http: {
    // настроить любые параметры, такие как
    // baseURL: "https://jsonplaceholder.typicode.com"
  }
}

