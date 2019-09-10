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
            <input placeholder="音乐" clearable style="text-indent:73px"  class="search-input"/>
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
 import {gethobby} from "../API/index.js"
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
    height: 133px;
     position: fixed;
     top: 0;
    z-index: 9999;
    background-color: #fff;
  }
 .search-top{
        height: 58px;
        line-height: 58px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        text-align: center;
      }
  a{ color:#000;
 display:block;
 width: 52px
 }
.tag{
   font-size:16px;
  flex: 1;
    }  
.search-input{
    width: 330px!important;
    height: 49px!important;
    border-radius: 8px;
    border: none;
    background-color: #e6e6e6;
     position:relative;
    line-height: 58px;
    }
.searchNum{
    border-radius: 8px;
     background-image:-webkit-gradient(linear,left top,right bottom,from(#ff816e),to(#ff62a5));
     color: #fff;
      padding:0 10px;
      height: 26px;
      display: inline-block;
      position: absolute;
      left:17px;
      top:25%; 
      line-height: 26px;
      }
 .sousuokuang{
     position:fixed;
     top:58px;
     left: 20px;
     margin: 14px 0px;
     }
.search-list{
    margin-top: 133px;
     border-top: 1px solid #ccc;
     display: flex;
     flex-direction: column;
     flex: 1;
     overflow-x: hidden;
	overflow-y: auto;
     
}
.list-item{
    display: flex;
    justify-content: space-around;
    height: 110px;
    box-sizing: border-box;
    // padding-top: 20px;
     align-items: center
   
}
.userimg{
    margin-left: 10px;
}
.userimg img{
    width: 65px;
    height: 70px;
    border-radius: 50%;
}
.girl {
    width: 12px;
}
.username{
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 8px;
}
.name{
    font-size: 16px;
    font-weight: 700;
}
.van-tag{
    margin: 0 4px 0 0;
}
.username .sexbox{
    border-radius: 7px;
   width: 26px;
   padding: 0 5px;
   height: 16px;
   line-height: 16px;
   color: #fff;
   margin-left: 8px;
}
</style>