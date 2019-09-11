<template>
  <div class="box">
      <!-- 头部 -->
      <div class="top">
          <router-link to="/message">
           <span>
            <i class="iconfont icon-left"></i>
         </span>
          </router-link>
       
        <div class="username">
           {{ contents }}
        </div>
        <div class="userpic">
            <img :src="`../../imgs/${eleimgs}`" alt="">
        </div>
      </div>
      <!-- 聊天展示区 -->
      <div class="content" ref="myspan" >
          <p class="time">今天 5:20</p>
          <div class="bubble" >
        <div class="demo clearfix">
            <span class="triangle"></span>
            <div class="article mysay">你好，在吗</div>
        </div>
        <div class="demo clearfix fr">
            <span class="triangle right"></span>
            <div class="article usersay">不在</div>
        </div>
           </div>
         </div>
    <!-- 聊天底部输入框 -->
    <div class="bottom">
       <div class="camera">
           <img src="../assets/img/zhaoxiangji.png" alt="">
       </div>
       <div class="shurukuang">
           <input type="text" placeholder="输入信息..." v-model="value"  @keyup.enter="sendmessage(value)" style="text-indent:15PX" class="chat-input">
       </div>
       <div class="send"
        @click="sendmessage(value)">
           <img src="../assets/img/fasong.png" alt="">
       </div>
    </div>
      </div>
</template>

<script>
 import {gethobby} from "../api/index.js";
  //import {hobbyList} from "./search"
  import {getUserDataById} from "../api/index.js";
export default {
  name: 'chat',
  
  data() { 
    return {
        contents:'',
        value:'',
        str:'',
        id:'',
        eleimgs:''
    }
  },
   
  methods:{
      sendmessage:function(value){
          var div = document.createElement('div');
          var value = this.value.trim();
          if(value){
            var str = `
              <div class="demo clearfix fr" >
             <span class="triangle right"></span>
             <div class="article usersay" >${value}</div>
         </div>
         `
          div.innerHTML=str;
           this.$refs["myspan"].append(div);
          }else{
               alert('内容不能为空')
            
          }
        // console.log(this.value);
        this.value='';
      },
      getDatas(){
                //this.id =
              getUserDataById(this.$route.query.id).then((res)=> {
                  this.eleimgs = res.data[0].imgs[0];
                  this.contents = res.data[0].name;
                  console.log(this.contents )
                })
            }
  },
  mounted:function(){
    
        this.getDatas();
       console.log( this.$route.query)
  }
 }
</script>

<style lang="scss"  >

   @import "../assets/font_1347279_qkkqrxx20qj/iconfont.css";
   .top{
       display: flex;
       justify-content: space-around;
       align-items: center;
       height: 66PX;
       line-height: 66PX;
       text-align: center;
       border-bottom: 1px solid #ccc;
       margin-bottom: 10PX;
   }

   .userpic img{
       width: 43PX;
       height: 43PX;
       border-radius: 50PX;
       margin-right: 10PX;
   }
   .username{
       width: 250PX;
       font-size: 20PX;
   }
   .clearfix:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
}
.clearfix {
    zoom: 1;
}
.demo {
    margin-bottom:10PX;
    padding-left:30PX;
    position:relative;
}
.iconfont{
font-size: 30PX;
}
.triangle {
    position:absolute;
    top:50%;
    margin-top:-8PX;
    left:22PX;
    display:block;
    width:0;
    height:0;
    overflow:hidden;
    line-height:0;
    font-size:0;
    border-bottom:8PX solid #FFF;
    border-top:8PX solid #FFF;
    border-left:none;
    border-right:8PX solid #efefef;
}
 
.demo .mysay {
    float:left;
    color:#000;
    display:inline-block;
    display:inline; zoom:1;
    padding:5PX 10PX;
    border:1PX solid #efefef;
    background:#eee;
    border-radius:8PX;
    background-color: #efefef;
    font-size: 16PX;
}
.demo .usersay {
    float:left;
    color:#000;
    display:inline-block;
    display:inline; zoom:1;
    padding:5PX 10PX;
    border:1PX solid #efefef;
    background:#eee;
    border-radius:8PX;
    background-color: #efefef;
     background-image:-webkit-gradient(linear,left top,right bottom,from(#ff816e),to(#ff62a5));
       font-size: 16PX;
}
 
.fr { padding-left:0PX; padding-right:30PX; }
 
.fr .triangle {
    left:auto;
    right:24PX;
    border-bottom:8PX solid #FFF;
    border-top:8PX solid #FFF;
    border-right:none;
    border-left:8PX solid #ff62a5;
}
 
.fr .article {
    float:right;
}
.bottom{
    width: 100%;
    display: flex;
    height: 80PX;
    justify-content: space-around;
    position: fixed;
    bottom: 0PX;
    left: 0;
    padding-top: 12PX;
    border-top: 1PX solid #dbdae3;
    z-index: 9999;
    background-color: #fff;
}
.bottom img{
    width: 30PX;
}
.bottom input{
    width: 260PX;
    height: 41PX;
    border-radius: 8PX;
    border:none;
    border: 1PX solid #dbdae3;
}
.bottom .send{
    margin-right: 5PX;
}
input {
 caret-color:#ff8960;
     }
.content{
    text-align: center;
}
.time{
    font-size: 16PX;
    margin-bottom: 5px;
}
</style>