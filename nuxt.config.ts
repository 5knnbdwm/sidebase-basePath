// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss'
  ],
  typescript: {
    shim: false
  },
  app: {
    // baseURL: '/'
    baseURL: '/app/'
  },
  auth: {
    // basePath: '/api/auth',
    basePath: '/app/api/auth',
    origin: process.env.ORIGIN
  }
})
