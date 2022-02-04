export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: 'false',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SPEQ Agri NUXT2',
    htmlAttrs: {
      lang: 'et'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: [
// here is files information ( if you have .json format, replace .js with .json
          {code: 'ru', iso: 'ru-RU', file: 'ru.json',},
          {code: 'en', iso: 'en-EN', file: 'en.json',},
          {code: 'et', iso: 'et-EE', file: 'et.json',},
        ],
        lazy: false,
        defaultLocale: process.env.VUE_APP_I18N_LOCALE || 'et',
        detectBrowserLanguage: {
          alwaysRedirect: false,
          fallbackLocale: 'et',
          redirectOn: 'root',
          useCookie: true,
          cookieCrossOrigin: false,
          cookieDomain: null,
          cookieKey: 'i18n_redirected',
          cookieSecure: false
        },
        vueI18n: {
          fallbackLocale: 'et',

        },
        langDir: 'lang/',
      }
    ]
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
