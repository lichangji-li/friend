// 引入ajax请求:
import { getData } from "../../api/index.js";

//暴露出去:
export default {
  namespaced: true,
  state: {
    msg: [] // 储存搜索标签页数据
  },
  getters: {
    Tagmsg(state) {
      return state.msg;
    }
  },
  mutations: {
    getMessage(state, payload) {
      state.msg = payload.msg;
    }
  },
  // 发送ajax:
  actions: {
    getMsg({ commit }) {
      var p2 = getData();
      p2.then(response => {
        console.log("55555555");
        console.log(response.data);
        commit({
          type: "getMessage",
          msg: response.data
        });
      });
    }
  }
};
