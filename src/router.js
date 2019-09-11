import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Search from "./views/Search";
import Search_tag from "./views/Search/search_tag.vue";
import Detail from "./views/Search/detail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/tag",
      name: "search_tag",
      component: Search_tag
    },
    {
      path: "/detail:id",
      name: "Detail",
      component: Detail
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
