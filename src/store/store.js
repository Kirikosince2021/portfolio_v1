import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    lang: 'JP',
  },
  getters: {
    lang: (state) => state.lang
  },
  mutations: {
    changeLang(state, lang) {
      state.lang = lang
    }
  },
  actions: {
  }
})
export default store