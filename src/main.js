import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routers/router.js'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import MuseUi from 'muse-ui'
import 'muse-ui/dist/muse-ui.css';
import iView from 'iview';

import Vant from 'vant';


//挂载swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper);
Vue.use(iView);
Vue.config.productionTip = false

Vue.use(MuseUi);
Vue.use(MintUI);
Vue.use(Vant);
//在vue原型中添加$http方法等于axios
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
