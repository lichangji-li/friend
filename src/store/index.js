//使用vuex进行数据的管理
import Vue from "vue";

// 1. 引入 vuex 插件 install
import Vuex from "vuex";

// 引入搜索主页仓库
import search from "./modules/search.js";
// 引入搜索标签页仓库
import searchTag from "./modules/searchTag.js";

// 详情页
import detail from "./modules/detail.js";

// 2. 注册
Vue.use(Vuex);

export default new Vuex.Store({
  // 暴露出去的小仓库:
  modules: {
    search,
    searchTag,
    detail
  }
});
