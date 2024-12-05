import vuetify from "./plugins/vuetify";
import "dotenv/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.css",
  ],
  build: {
    transpile: [
      "vuetify",
      "@animxyz/core",
      "@animxyz/vue3",
      "clsx",
      "naive-ui",
      "vueuc",
      "@css-render/vue3-ssr",
      "@juggle/resize-observer",
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: "modern",
        },
      },
    },
  },
  //server side rendering
  ssr: true,

  modules: ["@nuxt/eslint", "@nuxt/fonts", "nuxtjs-naive-ui"
  /* '@vueuse/nuxt' */, "@nuxt/image"],
  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
  app: {
    //global SEO attributes
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/png", href: "icon/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "icon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "icon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "icon/favicon-16x16.png",
        },
        { rel: "manifest", href: "icon/site.webmanifest" },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [
        {
          name: "author",
          content: "folllit",
        },
      ],
    },
  },
  runtimeConfig: {
    // Private config options are only available on the server side

    // Public config options are available on both server and client sides
    public: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },
});