export default defineNuxtConfig({
  nitro: {
    compatibilityDate: "2025-07-03",
  },
  // modules: ['@nuxtjs/i18n'],
  // i18n: {
  //   locales: [
  //     { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
  //     { code: 'ar', iso: 'ar-EG', name: 'Arabic', file: 'ar.json' }
  //   ],
  //   defaultLocale: 'en',
  //   lazy: true,
  //   langDir: 'locales/',
  //   strategy: 'no_prefix',
  //   vueI18n: './i18n.config.ts' // 👈 Use external config file
  // },
  css: [ 'bootstrap/dist/css/bootstrap.min.css',     // النسخة العادية LTR
  // 'bootstrap-rtl/dist/css/bootstrap-rtl.min.css'
],
  plugins: ["@/plugins/bootstrap.client.ts",'@/plugins/vue-i18n.ts','@/plugins/fontAwesome.js']
});
