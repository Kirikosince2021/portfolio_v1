import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      meta: {
        title: 'Frontside Portfolio'
      }
    },

  ]
})