
export default {
   mode: 'universal',
   target: 'server',
   type: "module",
   loading: false,
   head: {
      title: process.env.npm_package_name || '',
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
         { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
   },

   css: [
      "swiper/dist/css/swiper.css",
      "~/assets/global",
      "~/assets/text",
      "~/assets/buttons",
      "~/assets/colors",
   ],

   plugins: [
      { src: '~/plugins/vue-swiper', ssr: false },
      { src: '~/plugins/vuelidate' },
      { src: '~/plugins/datepicker', mode: 'client' },
      { src: '~/plugins/vue-toggle-button', mode: 'client' },
      { src: '~/plugins/rate', mode: 'client' },
   ],

   transition: {
      name: "layout",
      mode: "out-in"
   },

   components: true,

   buildModules: [
   ],

   modules: [
      // Doc: https://bootstrap-vue.js.org
      '@nuxtjs/axios',
      'bootstrap-vue/nuxt',
      'cookie-universal-nuxt',
   ],

   axios: {
      baseURL: "http://localhost:3001"
   },
}
