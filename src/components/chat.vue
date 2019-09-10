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
           <input type="text" placeholder="输入信息..." v-model="value"  @keyup.enter="sendmessage(value)" style="text-indent:15px" class="chat-input">
       </div>
       <div class="send"
        @click="sendmessage(value)">
           <img src="../assets/img/fasong.png" alt="">
       </div>
    </div>
      </div>
</template>

<script>
 import {gethobby} from "../API/index.js"
  //import {hobbyList} from "./search"
  import {getUserDataById} from "../API/index.js";
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

<style lang="scss" >

   @import "../assets/font_1347279_qkkqrxx20qj/iconfont.css";
   .top{
       display: flex;
       justify-content: space-around;
       align-items: center;
       height: 66px;
       line-height: 66px;
       text-align: center;
   }
    .userpic{
        padding-top: 25px;
    }
   .userpic img{
       width: 43px;
       height: 43px;
       border-radius: 50px;
       margin-right: 10px;
   }
   .username{
       width: 250px;
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
    margin-bottom:10px;
    padding-left:30px;
    position:relative;
}
 
.triangle {
    position:absolute;
    top:50%;
    margin-top:-8px;
    left:22px;
    display:block;
    width:0;
    height:0;
    overflow:hidden;
    line-height:0;
    font-size:0;
    border-bottom:8px solid #FFF;
    border-top:8px solid #FFF;
    border-left:none;
    border-right:8px solid #efefef;
}
 
.demo .mysay {
    float:left;
    color:#000;
    display:inline-block;
    display:inline; zoom:1;
    padding:5px 10px;
    border:1px solid #efefef;
    background:#eee;
    border-radius:8px;
    background-color: #efefef;
}
.demo .usersay {
    float:left;
    color:#000;
    display:inline-block;
    display:inline; zoom:1;
    padding:5px 10px;
    border:1px solid #efefef;
    background:#eee;
    border-radius:8px;
    background-color: #efefef;
     background-image:-webkit-gradient(linear,left top,right bottom,from(#ff816e),to(#ff62a5));
}
 
.fr { padding-left:0px; padding-right:30px; }
 
.fr .triangle {
    left:auto;
    right:24px;
    border-bottom:8px solid #FFF;
    border-top:8px solid #FFF;
    border-right:none;
    border-left:8px solid #ff62a5;
}
 
.fr .article {
    float:right;
}
.bottom{
    width: 100%;
    display: flex;
    height: 80px;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    padding-top: 12px;
    border-top: 1px solid #dbdae3;
}
.bottom img{
    width: 30px;
}
.bottom input{
    width: 260px;
    height: 41px;
    border-radius: 8px;
    border:none;
    border: 1px solid #dbdae3;
}
.bottom .send{
    margin-right: 5px;
}
input {
 caret-color:#ff8960;
     }
.content{
    text-align: center;
}
</style>