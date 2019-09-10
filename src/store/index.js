//使用vuex进行数据的管理
import Vue from "vue";

// 1. 引入 vuex 插件 install
import Vuex from "vuex";
// 2. 注册
Vue.use( Vuex );


export default new Vuex.Store({
    // 默认情况下，外部可以修改内部的数据，但是开启严格模式，则立马不允许
    strict: true,
    // a. 仓库里面的 state 放置数据
    state: {

    },
    // b. 稍后还要放置对数据的操作的行为代码（数据都是统一通过仓库内部，外部是不能直接修改数据）
    mutations: {

    },
    // 完成异步数据的操作
    actions: {

    },
    // 负责数据的获取 或者 是过滤
    getters: {

    }
})