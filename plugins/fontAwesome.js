import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGripLines } from '~/node_modules/@fortawesome/free-solid-svg-icons/index'

export default defineNuxtPlugin((nuxtApp) => {
  library.add(faGripLines) 
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
