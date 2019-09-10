import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'
import UserCompile from './views/UserCompile.vue'
import Vip from './views/Vip.vue'
import FreeVip from './views/freeVip.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/userCompile',
      name: 'UserCompile',
      component: UserCompile
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/freevip',
      name: 'FreeVip',
      component: FreeVip
    }
  ]
})
