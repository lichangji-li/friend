<template>
  <div class="detail">
    <!-- 轮播图 -->
    <div class="swiper">
      <van-swipe vertical>
        <van-swipe-item v-for="item in getxinxi[myId-1].imgs" :key="item.id">
          <div class="img_s">
            <img :src="'/imgs/'+ item" />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 点击小X -->
    <div class="x iconfont" @click="goback">&#xe619;</div>
    <!-- 详情介绍 -->
    <div class="p_first">
      <div class="msg_right">
        <div class="msg">{{getxinxi[myId-1].name}}</div>
        <div class="Adress">
          <div class="span1">{{getxinxi[myId-1].addr[0]+getxinxi[myId-1].addr[1]}}</div>
          <div class="span2">
            <a href="#">
              <img src="../../assets/imgs/z_img/fandan.png" />
            </a>
            <span>{{getxinxi[myId-1].mydata.age}}</span>
          </div>
        </div>
      </div>
      <div class="dian">
        <ul class="list_ul">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <!-- 关于我更多 -->
    <div class="about_me">
      <h5>关于我</h5>
      <div class="more">
        <p>{{getxinxi[myId-1].about}}</p>
        <p class="guding_p">能和相爱的人在一起，做什么都特别开心．你认为呢?能和相爱的人在一起，做什么都特别开心．你认为呢?</p>
        <p class="xianshimore">显示更多</p>
      </div>
    </div>
    <!-- 好友列表 -->
    <div class="friend_list">
      <h5>好友列表</h5>
      <ul>
        <li v-for="ele in getxinxi" :key="ele.id">
          <a href="#">
            <img :src="'/imgs/'+ele.imgs[0]" />
          </a>
        </li>
      </ul>
    </div>
    <!-- 基本资料 -->
    <div class="jiben">
      <h5>基本资料</h5>
      <ul>
        <li>
          身高:
          <span>{{getxinxi[myId-1].mydata.height}}</span>
        </li>
        <li>
          体重:
          <span>55kg</span>
        </li>
        <li>
          感受状态:
          <span>{{getxinxi[myId-1].mydata.love}}</span>
        </li>
        <li>
          注册时间:
          <span>{{getxinxi[myId-1].mydata.time}}</span>
        </li>
      </ul>
    </div>
    <!-- 感兴趣的点 -->
    <div class="interest">
      <h5>感兴趣的点</h5>
      <ul>
        <li v-for="ele in getxinxi[myId-1].hoppy" :key="ele.id">
          <a>{{ele}}</a>
        </li>
      </ul>
    </div>
    <!-- 正在寻找 -->
    <div class="xunzhao">
      <h5>正在寻找</h5>
      <ul>
        <li>
          <a href="#">朋友</a>
        </li>
        <li>
          <a href="#">异性朋友</a>
        </li>
        <li>
          <a href="#">结婚对象</a>
        </li>
      </ul>
    </div>
    <!-- 底部组件 -->
    <div class="Tabs">
      <div class="aixin iconfont">&#xe85c;</div>
      <div class="xinxin iconfont">&#xe6b9;</div>
      <div class="xiaoxi iconfont">&#xe618;</div>
    </div>
  </div>
</template>

<script>
import "../../assets/font/iconfont.css";
import { mapActions, mapGetters } from "vuex"
export default {
  name: "detail",
  data () {
    return {
      myId: this.$route.params.id,
    }
  },
  methods: {
    goback () {
      this.$router.back()
    },
    ...mapActions("detail", ['getDetail']),

  },
  computed: {
    ...mapGetters("detail", ['getxinxi'])
  },
  created () {
    this.getDetail()
  }
}
</script>
<style lang="scss" scope>
body,
html {
  height: 100%;
}
.detail {
  margin-bottom: 120px;
  width: 750px;
  position: relative;
  background: url(../../assets/imgs/z_img/beijin03.png) no-repeat;
  .swiper {
    height: 100%;
    width: 750px;
    .van-swipe {
      width: 750px;
      height: 900px;
      .van-swipe-item {
        width: 750px;
        height: 900px;
        .img_s {
          img {
            width: 100%;
            height: 900px;
          }
        }
      }
    }
  }
  .x {
    width: 55px;
    height: 55px;
    background: #9f9788;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 50%;
    font-size: 35px;
    color: #fff;
    line-height: 50px;
    position: absolute;
    top: 30px;
    left: 30px;
  }
  .p_first {
    width: 750px;
    height: 200px;
    border-bottom: 4px solid #f5f5f5;
    background: #fff;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .msg_right {
      margin-left: 40px;
      .msg {
        margin-top: 10px;
        font-weight: 700;
      }
      .Adress {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        .span1 {
          color: #c5c5c5;
          font-size: 30px;
        }
        .span2 {
          display: block;
          width: 50px;
          height: 25px;
          margin-top: 10px;
          font-size: 12px;
          background: url(../../assets/imgs/z_img/beijin02.png) no-repeat;
          border-radius: 15px;
          position: relative;
          a {
            display: block;
            img {
              display: block;
              width: 15px;
              height: 20px;
              position: absolute;
              top: 4px;
              left: 7px;
            }
          }
          span {
            font-size: 10px;
            position: absolute;
            top: 4px;
            left: 21px;
            color: #f1d6cf;
          }
        }
      }
    }

    .dian {
      width: 80px;
      height: 80px;
      background: #f2f2f2;
      border-radius: 50%;
      margin-right: 20px;
      .list_ul {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        li {
          width: 15px;
          height: 15px;
          background: #c1c0c9;
          border-radius: 50%;
          margin-left: 5px;
        }
      }
    }
  }
  .about_me {
    margin-top: 40px;
    h5 {
      margin-right: 480px;
    }
    .more {
      font-size: 30px;
      height: 150px;
      margin-left: 15px;
      margin-top: 10px;
      box-sizing: border-box;
      .guding_p {
        overflow: hidden;
        margin-left: 15px;
        box-sizing: border-box;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .xianshimore {
        margin-right: 590px;
        color: #ff689a;
        font-size: 35px;
        font-weight: 800;
        margin-top: 15px;
      }
    }
  }
  .friend_list {
    margin-top: 80px;
    h5 {
      margin-right: 430px;
    }
    ul {
      display: flex;
      overflow: hidden;
      margin-top: 20px;
      li {
        margin-left: 27px;
        a {
          img {
            width: 130px;
            height: 130px;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .jiben {
    margin-top: 40px;
    h5 {
      margin-right: 440px;
    }
    ul {
      width: 100%;
      li {
        width: 100%;
        font-size: 38px;
        color: #000;
        display: flex;
        padding-left: 35px;
        margin-top: 20px;
        box-sizing: border-box;
        span {
          color: #9b9b9b;
        }
      }
    }
  }
  .interest {
    margin-top: 40px;
    h5 {
      width: 100%;
      display: flex;
      padding-left: 25px;
      box-sizing: border-box;
    }
    ul {
      display: flex;
      margin-top: 20px;
      li {
        font-size: 40px;
        border: 3px solid #ededf1;
        padding: 0 25px;
        margin-left: 20px;
        border-radius: 20px;
      }
    }
  }
  .xunzhao {
    margin-top: 20px;
    background: #f6f6f6;
    h5 {
      margin-right: 440px;
      color: #9b9b9b;
    }
    ul {
      display: flex;
      margin-top: 20px;
      justify-content: space-around;
      li {
        font-size: 35px;
        border: 3px solid #ededf1;
        padding: 5px 25px;
        margin-left: 20px;
        border-radius: 20px;
        a {
          color: #000;
          font-size: 40px;
        }
      }
    }
  }
  .Tabs {
    width: 100%;
    height: 125px;
    display: flex;
    flex: 1;
    position: fixed;
    top: 1200px;
    left: 0;
    justify-content: space-around;
    padding-left: 5px;
    box-sizing: border-box;
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
      width: 120px;
      height: 120px;
      line-height: 120px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0px 0px 2px #888888;
      font-size: 80px;
      color: #7ce4a5;
    }
    .xiaoxi {
      width: 120px;
      height: 120px;
      line-height: 120px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0px 0px 2px #888888;
      font-size: 80px;
      color: #59c8df;
    }
  }
}
</style>