// 引入ajax请求:
import { getData } from "../../api/index.js";

// 暴露出去:
export default {
  namespaced: true,
  state: {
    BannerList: [], // 存储所有的数据
    num: 1,
    myLove: [],
    myCollect: []
  },
  getters: {
    //获取轮播图的数据,还有操作?
    BannerListimgs(state) {
      // var imgs = state.BannerList;
      // var newsimg = imgs.map(function(item) {
      //   return item.imgs;
      // });
      // // console.log(newsimg);
      // //获取num++;
      // var id = state.num;
      // // console.log("id", id);
      // return newsimg.map(item => item[id]);
      return state.BannerList;
    },
    // 获取所有的数据:
    everyId(state) {
      return state.num;
    }
  },
  mutations: {
    setBannerList(state, payload) {
      // console.log(payload.BannerList[0].imgs[0]);
      state.BannerList = payload.BannerList;
    },
    //数据加一:
    AddNum(state) {
      state.num++;
    },
    //收藏爱心id信息:
    AddmyLovelist(state, id) {
      var Id = id;
      var Arr = [];
      Arr.push(Id);
      Arr.forEach(function(element) {
        if (element !== 1 && element == id) {
          console.log("ID", Id);
          return;
        } else {
          state.myLove.push(Arr);
        }
      });
    },
    //收藏星星id信息:
    //存在bug,可以重复点击 会有相同的id;
    AddmyCollect(state, id) {
      var Id = id;
      state.myCollect.push(Id);
    }
  },
  // 发送ajax:
  actions: {
    getBannerList({ commit }) {
      var p1 = getData();
      p1.then(response => {
        console.log(response.data);
        commit({
          type: "setBannerList",
          BannerList: response.data
        });
      });
    }
  }
};
