import vuetify from "./plugins/vuetify"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'vuetify/lib/styles/main.sass',
    "@mdi/font/css/materialdesignicons.css",
  ],
  build: {
    transpile: ['vuetify']
  }, 
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern',
        },
      },
    },
  },
 //server side rendering
 ssr: true,
  
 modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    /* 
    'nuxtjs-naive-ui', */
    /* '@vueuse/nuxt' */
  ],
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  app: {
    //global SEO attributes
    head: {
      htmlAttrs: {
        lang: 'en'
      },/* 
      link: [{ rel: 'icon', type: 'image/png', href: 'favicon_small.png' }], */
      link: [
        { rel: 'icon', type: 'image/png', href: 'icon/favicon.png' },
        {rel:"apple-touch-icon" ,sizes:"180x180", href:"icon/apple-touch-icon.png"},
        {rel:"icon" ,type:"image/png",sizes:"32x32", href:"icon/favicon-32x32.png"},
        {rel:"icon" ,type:"image/png",sizes:"16x16", href:"icon/favicon-16x16.png"},
        {rel:"manifest" ,href:"icon/site.webmanifest"},
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [
        {
          name: "author",
          content: "folllit"
        }
      ]
    }
  }, 
  runtimeConfig: {
    // Private config options are only available on the server side
    apiKeyFirebase: 'AIzaSyBlwNTES0jBDqVKbwPTcEMMtjp5I4VmZIE',
    authDomain: 'folllit.firebaseapp.com',
    projectId: 'folllit',
    storageBucket: 'folllit.firebasestorage.app',
    messagingSenderId: '489241988958',
    appId: '1:489241988958:web:3587ad4fa427cc78c209cf',
    measurementId: 'G-VX67VQZCQB',
    
    // Public config options are available on both server and client sides
    public: {
      //apiBase: 'https://api.example.com'
    }
  },
})
