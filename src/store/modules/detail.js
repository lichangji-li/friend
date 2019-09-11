// 引入ajax请求:
import { getData } from "../../api/index.js";
export default {
  namespaced: true,
  state: {
    detail: []
  },
  getters: {
    getxinxi(state) {
      return state.detail;
    }
  },
  mutations: {
    getDATA(state, payload) {
      state.detail = payload.detail;
    }
  },
  actions: {
    getDetail({ commit }) {
      var p3 = getData();
      p3.then(response => {
        console.log(response);
        commit({
          type: "getDATA",
          detail: response.data
        });
      });
    }
  }
};
