<template>
  <div class="search">
    <!-- 头部开始的地方 -->
    <div class="header">
      <div class="tansuo">探索</div>
      <div class="btn" @click="goTagseach">
        <img src="../../assets/imgs/z_img/btn.png" />
      </div>
    </div>
    <!-- 轮播图开始的地方 -->

      <div class="myswiper" >
        <myswiper :imgs="BannerListimgs"></myswiper>
      </div>

    <!-- 点击按钮开始的地方 -->
    <div class="Tabs">
      <div class="fanhui iconfont">&#xe6c3;</div>
      <div class="shuaxin iconfont" @click="AddNum">&#xe619;</div>
      <div class="aixin iconfont" @click="AddmyLovelist(everyId)">&#xe85c;</div>
      <div class="xinxin iconfont" @click="AddmyCollect(everyId)">&#xe6b9;</div>
    </div>
  </div>
</template>
<script>
// 引入ajax请求:
import myswiper from "../../components/z-swiper/swiper";
import "../../assets/font/iconfont.css";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "search",
  computed: {
    ...mapGetters('search', ['BannerListimgs', 'everyId'])

  },
  methods: {
    goTagseach () {
      this.$router.push("tag");
    },
    ...mapMutations('search', ['AddNum', 'AddmyLovelist', 'AddmyCollect']),
    ...mapActions('search', ['getBannerList']),
    ...mapActions('searchTag', ['getMsg'])
  },
  // 这里开始注册引入的组件:
  components: { myswiper },

  created () {
    this.getBannerList(),
    this.getMsg()
  },
  //真实dom完成:
  mounted () {
    setTimeout(() => {
      //记住这个:
      console.log('data', this.$store.getters['search/BannerListimgs']);
    }, 2000)
  },
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  background: url("../../assets/imgs/z_img/beijin.png");
}
.search {
  width: 750px;
  height: 100%;
  margin-top: -15px;
  position: relative;
  .header {
    width: 100%;
    height: 70px;
    display: flex;
    margin-top: 45px;
    justify-content: space-between;
    .tansuo {
      display: flex;
      height: 100%;
      font-size: 50px;
      color: white;
      font-weight: 900;
      padding-left: 24px;
      box-sizing: border-box;
    }
    .btn {
      display: flex;
      width: 70px;
      height: 100%;
      color: white;
      border-radius: 50px;
      background: #ff9f83;
      display: flex;
      margin-right: 20px;
      img {
        width: 45px;
        height: 45px;
        line-height: 50px;
        margin-left: 15px;
        box-sizing: border-box;
        display: flex;
        align-self: center;
        border-radius: 50px;
      }
    }
  }
  .myswiper {
    margin-top: 60px;
  }
  .Tabs {
    width: 100%;
    height: 125px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 780px;
    left: 0;
    padding-left: 5px;
    box-sizing: border-box;
    text-align: center;
    .fanhui {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      box-shadow: 0px 0px 2px #888888;
      background: #ffffff;
      font-size: 60px;
      line-height: 80px;
      color: #f7d4aa;
    }
    .shuaxin {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      font-size: 90px;
      color: #bdbbc6;
      font-weight: 400;
      line-height: 120px;
      box-shadow: 0px 0px 2px #888888;
      background: #ffffff;
    }
    .aixin {
      width: 120px;
      height: 120px;
      line-height: 120px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0px 0px 2px #888888;
      font-size: 80px;
      color: #ff767e;
    }
    .xinxin {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0px 0px 2px #888888;
      font-size: 60px;
      line-height: 80px;
      color: #7ce4a5;
    }
  }
}
</style>