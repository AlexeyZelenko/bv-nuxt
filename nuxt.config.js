module.exports = {
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
  build: {
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
  modules: [
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
}
