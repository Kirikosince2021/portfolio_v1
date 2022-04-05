import Vue from 'vue'
import App from './App.vue'
import router from './router/route'
import store from './store/store'

Vue.config.productionTip = false

import { i18n } from './plugins/i18n'
import { aos } from './plugins/aos'

new Vue({
  router,
  store,
  i18n,
  aos,
  render: h => h(App),
}).$mount('#app')
