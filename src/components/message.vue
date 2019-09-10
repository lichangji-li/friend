<template>
  <div>
    <mu-paper :z-depth="1" class="demo-list-wrap">
      <div class="message-top">
        <mu-appbar background-color="#f5f5f5">
          <span class="infos">消息</span>
        </mu-appbar>
        <!-- 搜索 -->
        <van-search placeholder="搜索..." style="text-indent:10px;" @change="tosearch()" />
      </div>
    </mu-paper>
    <div class="messageBox">
      <div
        class="mymessage"
        v-for="(ele,index) in hobbyList"
        :key="index++"
        @click="getChatBox(ele.id)"
      >
       <van-swipe-cell>
          <van-cell :border="false">
          <div class="messageitem"  @click="getChatBox(ele.id)">
            <div class="messageleft">
              <img :src="`../../imgs/${ele.imgs[0]}`" alt />
            </div>
            <div class="messageright">
              <p class="uname">{{ele.name}}</p>
              <p class="messageinfos">{{ele.about}}</p>
            </div>
          </div>
          </van-cell>
          <template slot="right">
            <van-button square type="danger" text="删除" @click="remove(ele.id)"/>
         </template>
       </van-swipe-cell>
      </div>
    </div>
  </div>
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

.message-top {
  height: 260px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 9999;
}
.mu-appbar,
.mu-elevation-4 {
  height: 176px !important;
}
.messageBox {
  margin-top: 260px;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 136px;
}
.van-search {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #b2b2b2;
  height: 100px;
  line-height: 80px;
}
.van-cell {
  background-color: #e6e6e6 !important;
  border-radius: 40px;
}
.van-field__left-icon {
  margin-left: 20px !important;
}
.messageleft {
  width: 170px;
  height: 198px;
  padding-top: 50px;
  box-sizing: border-box;
}
.messageleft img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-left: 20px;
}

.van-cell {
  background-color: #fff !important;
  border-radius: none !important;
  padding: 0 0px 0 0px;
}
.van-field {
  background-color: #e6e6e6 !important;
  height: 70px;
  align-items: center;
}

.infos {
  font-size: 40px;
  font-weight: 600;
}
.messageitem {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  width: 100%;
}
.messageright {
  height: 204px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 70px;
}
.uname {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
}
.messageinfos {
  font-size: 30px;
  color: gray;
  line-height: 50px;
}
.van-field__body {
  font-size: 16px !important;
}
 .van-button--square{
   height: 100%;
  
 }
 .van-swipe-cell__wrapper{
   width:100%;
 }

</style>