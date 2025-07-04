// plugins/vue-i18n.ts
import { createI18n } from 'vue-i18n'
import ar from '~/locales/ar'
import en from '~/locales/en'

export default defineNuxtPlugin((nuxtApp) => {
  const messages = {
    en: en,
    ar:ar
  }

  const i18n = createI18n({
    legacy: false, // تستخدم Composition API
    locale: 'en',
    fallbackLocale: 'en',
    messages,
  })

  nuxtApp.vueApp.use(i18n)
})
