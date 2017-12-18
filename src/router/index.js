import Vue from 'vue'
import Router from 'vue-router'
import viewer from 'views/albums'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'viewer',
      component: viewer
    }
  ]
})
