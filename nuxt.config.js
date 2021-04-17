export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ec-clients-fe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'csrf-token', content: '{{ csrf_token() }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fontawesome-free/css/all.min.css',
    '~/assets/css/sb-admin-2.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  { src: '~/plugins/persistedState.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    '@nuxtjs/toast'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  axios: {
    baseURL: 'https://ecclients.herokuapp.com/api/v1'
  },
  // proxy: {
  //   '/api': {
  //     target: 'http://127.0.0.1:8000/',
  //     pathRewrite: { '^/api': '/' }
  //   }
  // },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.token',
          required: true,
          type: 'Bearer'
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'data.token' },
          logout: { url: '/logout', method: 'get' },
          user: { url: 'auth/user', method: 'get', propertyName: false }
        }
      }
    }
  },

  router: {
    // middleware: ['auth']
  }
}
