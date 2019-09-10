import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Collect from "./views/collect.vue";
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    },{
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
