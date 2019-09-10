import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Collect from "./views/collect.vue";
import User from './views/User.vue'
import UserCompile from './views/UserCompile.vue'
import Vip from './views/Vip.vue'
import FreeVip from './views/freeVip.vue'
import Nearby from './views/Nearby/index.vue'
import Screen from './views/Nearby/Screen.vue'
import message from './components/message.vue'
import chat from './components/chat.vue'
import search from './components/search.vue'
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
    },
    {
      path: '/nearby',
      name: 'nearby',
      component: Nearby,



    },
    {
      path: '/screen',
      name: 'screen',
      component: Screen
    },
    { path: '/message',name: 'message',component: message },
    { path: '/chat',name: 'chat',component: chat },
    { path: '/search',name: 'search',component: search },
  ]
})
