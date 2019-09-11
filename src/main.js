import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router.js'
import store from "./store/index.js";
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css';
import iView from 'iview';

import "amfe-flexible";

import Vant from "vant";

import "vant/lib/index.css";

//挂载swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(VueAwesomeSwiper);
Vue.use(iView);
Vue.config.productionTip = false

Vue.use(MuseUi);
// Vue.use(MintUI);
Vue.use(Vant);
//在vue原型中添加$http方法等于axios
Vue.prototype.$http = axios


import 'amfe-flexible'
/*import './assets/reset.css'*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
