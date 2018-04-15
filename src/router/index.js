import Vue from 'vue'
import Router from 'vue-router'
import NjeruCyrusHome from '@/components/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: NjeruCyrusHome
    },
  ]
})
