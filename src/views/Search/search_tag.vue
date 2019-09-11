<template>
  <div class="search_Tag">
    <div class="top">
      <!-- 头部写好 -->
      <div class="s_header">
        <van-nav-bar title="标签搜索" left-arrow @click-left="onClickLeft" />
      </div>
      <!-- 搜索开始 -->
      <div class="search">
        <input type="text" class="ipt" placeholder="音乐" />
        <div class="content">
          <div class="x iconfont">&#xe619;</div>
        </div>
      </div>
    </div>
    <!-- 列表开始 -->
    <ul class="list" v-for="item in Tagmsg" :key="item.id">
      <li>
        <router-link :to="'/detail'+item.id">
          <div class="s_img">
            <img :src="'/imgs/' + item.imgs[0]" />
          </div>
          <div class="right">
            <p class="one_p">
              <span class="span1">{{item.name}}</span>
              <span class="span2">
                <span class="iconfont">&#xe60f;</span>
                <span>{{item.mydata.age}}</span>
              </span>
            </p>
            <ul class="bottom_list">
              <li v-for="ele in item.hoppy" :key="ele.id">{{ele}}</li>
            </ul>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { mapActions, mapGetters } from "vuex";
Vue.use(NavBar);
export default {
  name: "searchTag",
  methods: {
    onClickLeft () {
      this.$router.back();
    },

    ...mapActions('searchTag', ['getMsg'])

  },
  computed: {
    ...mapGetters("searchTag", ['Tagmsg'])
  },
  created () {
    this.getMsg()
  },
}
</script>

<style lang="scss">
body,
html {
  height: 100%;
  width: 100%;
}
.search_Tag {
  height: 100%;
  background: #f9f9f9;
  .top {
    height: 200px;
    background: #f9f9f9;
    border-bottom: 1px solid #b2b2b2;
    .s_header {
      .van-nav-bar {
        height: 80px;
        .van-nav-bar__left {
          height: 80px;
          line-height: 80px;
          font-size: 30px;
          .van-nav-bar__arrow {
            font-size: 40px;
            color: #484646;
          }
          .van-nav-bar__text {
            color: #484646;
          }
        }
        .van-nav-bar__title {
          height: 80px;
          line-height: 80px;
          font-size: 30px;
        }
      }
    }
    .search {
      height: 70px;
      width: 100%;
      margin-top: 20px;
      background: #fff;
      position: relative;
      .ipt {
        width: 686px;
        height: 70px;
        outline: none;
        border: 0px;
        border-radius: 25px;
        background: #e6e6e6;
        font-size: 34px;
      }
      .x {
        width: 45px;
        height: 45px;
        background: #c1c0c9;
        margin-right: 10px;
        margin-top: 25px;
        border-radius: 50%;
        font-size: 35px;
        color: #fff;
        line-height: 50px;
        position: absolute;
        top: 0;
        left: 650px;
      }
    }
  }
  .list {
    height: 100%;
    margin: 20px;
    box-sizing: border-box;
    li {
      height: 190px;

      a {
        display: inline-block;
        height: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
        color: #000;
        .s_img {
          width: 150px;
          height: 150px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .right {
          display: flex;
          flex: 1;
          flex-direction: column;
          border-bottom: 2px solid #efefef;
          margin-left: 20px;
          .one_p {
            padding-right: 240px;
            box-sizing: border-box;
            display: flex;
            position: relative;
            .span1 {
              font-size: 40px;
              font-weight: 800;
              padding-left: 15px;
            }
            .span2 {
              border-radius: 50px;
              font-size: 14px;
              position: absolute;
              top: 20px;
              left: 140px;
              display: block;
              width: 70px;
              height: 33px;
              line-height: 33px;
              background: url(../../assets/imgs/z_img/beijin02.png) no-repeat;
              span {
                color: #f9f9f9;
                font-size: 14px;
              }
            }
          }
          .bottom_list {
            display: flex;
            li {
              height: 40px;
              border: 3px solid #dad9e2;
              line-height: 40px;
              margin-left: 20px;
              font-size: 30px;
              border-radius: 15px;
              padding: 10px;
            }
          }
        }
      }
    }
  }
}
</style>