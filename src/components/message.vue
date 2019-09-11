<template>
    
          <mu-paper :z-depth="1" class="demo-list-wrap">
            <div class="message-top">
              <mu-appbar background-color="#f5f5f5">
     <span class="infos">消息</span>
  </mu-appbar>
  <!-- 搜索 -->
      <van-search placeholder="搜索..." style="text-indent:5PX;" v-model="value" @change="tosearch()"/>
            </div>
  
      <div class="message-content">
       <mu-list textline="three-line" v-for="(ele,index) in hobbyList" :key='index'>  
     <!-- <mu-sub-header>今天</mu-sub-header>  -->
       <!-- 删除滑动插件，提供2个插槽，这里只用了一个插槽，左侧插槽是向右滑显示的内容 ，van-cell是两侧插槽包裹的部分 ，右侧插槽就是左滑显示内容-->
          <van-swipe-cell>
            <!-- 两侧插槽包裹区域 -->
            <van-cell :border="false">
            <!-- <router-link to='/chat'> -->
        <mu-list-item avatar :ripple="false" button  @click="getChatBox(ele.id)">
     <mu-list-item-action>
        <mu-avatar>
          <!-- <img :src="../assets/img/touxiang1.jpg"> -->
           <img :src="`../../imgs/${ele.imgs[0]}`" alt="">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>{{ele.name}}</mu-list-item-title>
        <mu-list-item-sub-title>
          <span style="color: rgba(0, 0, 0, .87)"></span> {{ele.about}}
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
       <!-- </router-link> -->
       </van-cell>
       <!-- 右侧插槽，左滑显示删除-->
        <template slot="right" >
          <van-button square type="danger" text="删除" @click="remove(ele.id)"/>
        </template>
      </van-swipe-cell>
      <mu-divider></mu-divider>  
        </mu-list> 
  </div>
</mu-paper>
</template>



<script>
import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
import { SwipeCell } from "vant";
import { swiper, swiperSlide } from "vue-awesome-swiper";
Vue.use(SwipeCell);

import { gethobby } from "../api/index.js";

export default {
  name: "message",
  data() {
    return {
      value: "",
      hobbyList: [],
      id: ""
    };
  },
  methods: {
    tosearch: function() {
      this.$router.push({ path: "/search" });
    },
    getChatList: function() {
      gethobby().then(response => {
        if (response.status == 200) {
          this.hobbyList = response.data;
        }
      });
    },
    remove: function(id) {
      // console.log(id);
      this.hobbyList.forEach((ele, index, arr) => {
        if (ele.id == id) {
          // console.log(this.hobbyList)
          arr.splice(index, 1);
        }
      });
    },
    //点击跳转到chat详情页，并传ID过去
    getChatBox: function(id) {
      this.$router.push({ path: "/chat", query: { id } });
      //console.log(id);
    }
  },
  mounted: function() {
    this.getChatList();
  }
};
</script>

<style lang="scss" >
@import "../../node_modules/vant/lib/index.css";


.message-top{
   height: 131PX;
   position: fixed;
   top: 0PX;
   width: 100%;
   z-index: 9999;
 }
 .message-content{
   margin-top: 131PX;
   flex: 1;
   margin-bottom: 67.5PX;
 }
  .demo-list-wrap {
  width: 100%;
  max-width: 375PX;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.van-search ,.van-search--show-action{
    display: flex;
    justify-content: space-around;
    border-bottom: 1PX solid #b2b2b2;
   height: 75PX;
}
.van-cell{
        background-color: #e6e6e6!important;
        border-radius: 20PX;
}
.van-field__left-icon {
    margin-left: 10PX!important;
}
.mu-list{
 overflow: hidden;
 padding: 0PX!important;
}
.van-button--normal {
  height: 100%;
}
.van-cell{
  background-color: #fff!important;
  border-radius: none!important;
  padding: 0 0PX 0 0PX;

}
.van-field{
   background-color: #e6e6e6!important;
   height: 35PX;
   align-items: center;
}   
 .mu-avatar img {
   height: 50PX;
   width: 50PX;
   margin-top: 8PX;
 } 

//  van-button--danger van-button--normal van-button--square
</style>