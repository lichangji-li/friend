<template>
  <div class="box">
      <div class="mytop">
        <div class="search-top">
            <router-link to="/message">
            <span class="exit">
                <i class="iconfont icon-left" ></i>
                </span>
            </router-link>
            <div class="tag">搜索标签</div>
        </div>
        <div class="sousuokuang">
            <input placeholder="音乐" clearable style="text-indent:73PX;font-size:15PX"  class="search-input"/>
            <span class="searchNum">{{hobbyList.length}}</span>
        </div>
      </div>

       <div class="search-list">
           <div class="list-item" v-for="(ele,index) in hobbyList" :key='index++'>
               <div class="userimg">
                   <img :src="`../../imgs/${ele.imgs[0]}`" alt="">
               </div>
               <div class="text">
                   <div class="username">
                       <span class="name"> {{ele.name}}</span>
                        <span style=" background-image:-webkit-gradient(linear,left top,right bottom,from(#ff816e),to(#ff62a5));" class="sexbox">
                            <img src="../assets/img/nvxing.png" alt="" class="girl">
                            {{ele.mydata.age}}
                        </span>
                   </div>
                   <div class="hobit">
                        <van-tag plain>{{ele.name}}</van-tag>
                         <van-tag plain type="primary">跳舞</van-tag>
                        <van-tag plain type="success">看电影</van-tag>
                        <van-tag plain type="danger">游戏</van-tag> 
                   </div>
               </div>
           </div>
       </div>
  </div>     
</template>

<script>

import Vue from 'vue';
import { Tag } from 'vant';
 import {gethobby} from "../api/index.js"
Vue.use(Tag);
export default {
  name: '',
  data() { 
    return {
        hobbyList:[],
        hobitList:[],
       
    }
  },
  methods:{
      gethobit:function(){
          gethobby().then((response) => {
             // console.log(response.data.login)
              if(response.status == 200){
                   this.hobbyList = response.data;
                   console.log(this.hobbyList)
                   
              }
          })
      },
      
  },
  mounted:function(){
      this.gethobit();
      
      
  }
 }
</script>

<style lang="scss" scoped>

   @import "../assets/font_1347279_qkkqrxx20qj/iconfont.css";
 @import'../../node_modules/iview/dist/styles/iview.css';
 .box{
      display: flex;
      flex-direction: column;
      height: 100%;
 }
  .mytop{
    width: 100%;
    height: 133PX;
     position: fixed;
     top: 0;
        z-index: 9999;
        background-color: #fff;
  }
 .search-top{
        height: 58PX;
        line-height: 58PX;
        display: flex;
        justify-content: space-between;
        width: 100%;
        text-align: center;
      }
  a{ color:#000;
 display:block;
 width: 52PX
 }
.tag{
   font-size:16PX;
  flex: 1;
    }  
.search-input{
    width: 330PX!important;
    height: 49PX!important;
    border-radius: 8PX;
    border: none;
    background-color: #e6e6e6;
     position:relative;
    line-height: 58PX;
    }
.searchNum{
    border-radius: 8PX;
     background-image:-webkit-gradient(linear,left top,right bottom,from(#ff816e),to(#ff62a5));
     color: #fff;
      padding:0 10PX;
      height: 26PX;
      display: inline-block;
      position: absolute;
      left:17PX;
      top:25%; 
      line-height: 26PX;
      font-size: 16PX;
      }
 .sousuokuang{
     position:fixed;
     top:58PX;
     left: 20PX;
     margin: 14PX 0PX;
     }
.search-list{
    margin-top: 133PX;
     border-top: 1PX solid #ccc;
     display: flex;
     flex-direction: column;
     flex: 1;
     overflow-x: hidden;
	overflow-y: auto;
     
}
.list-item{
    display: flex;
    
    height: 110PX;
    box-sizing: border-box;
    // padding-top: 20PX;
     align-items: center
   
}
.userimg{
    margin: 0 20PX;
}
.userimg img{
    width: 65PX;
    height: 70PX;
    border-radius: 50%;
}
.girl {
    width: 12PX;
}
.username{
    display: flex;
    // justify-content: space-around;
    font-size: 14PX;
    font-weight: 300;
   align-items: center;
}
.name{
    font-size: 16PX;
    font-weight: 700;
}
.van-tag{
    margin: 0 4PX 0 0;
    font-size: 13PX;
    
}
.username .sexbox{
    border-radius: 7PX;
   width: 40PX;
   padding: 0 5PX;
   height: 16PX;
   line-height: 16PX;
   color: #fff;
   margin-left: 8PX;
   display: flex;
   justify-content: space-around
}
.van-field__body{
    font-size: 15PX!important;
}
.icon-left{
    font-size: 30PX;
}
</style>