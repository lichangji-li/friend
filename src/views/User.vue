<template>
    <div class="box">
        <div class="top">
            <div class="con">
                <router-link to="userCompile">
                    <div class="head">
                        <i></i>
                        <img :src="`../../imgs/${hearImg}`" alt="">
                    </div>
                </router-link>
                <router-link to="userCompile">
                    <div class="top-head">
                        <p>ahdauhuaia<router-link to="1"></router-link></p>
                        <div class="addrs">美国，洛杉矶</div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="main">
            <div class="record">
                <ul>
                    <li>
                        <router-link to="1">
                            <p>访客</p>
                            <span>111</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="2">
                            <p>喜欢</p>
                            <span>112</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="3">
                            <p>匹配</p>
                            <span>113</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="my-star">
                <ul>
                    <li>
                        <router-link to="1">
                            <span></span>
                            <p>喜欢的</p>
                            <i class="love-i">&gt</i>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="2">
                            <span></span>
                            <p>访客</p>
                            <i>&gt</i>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="3">
                            <span></span>
                            <p>群组</p>
                            <i>&gt</i>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="my-star my-star2">
                <ul>
                    <li>
                        <router-link to="1">
                            <span></span>
                            <p>我的钱包</p>
                            <i class="love-i">&gt</i>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/freevip">
                            <span></span>
                            <p>vip</p>
                            <i>&gt</i>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="3">
                            <span></span>
                            <p>搜索好友</p>
                            <i>&gt</i>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="3">
                            <span></span>
                            <p>黑名单</p>
                            <i>&gt</i>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="3">
                            <span></span>
                            <p>设置</p>
                            <i>&gt</i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {getUserDataById} from "../api/index";
    export default {
        name: "user",
        data : function(){
            return {
                allData:[],
                hearImg:""
            }
        },
        methods:{
            getDatas(){
                getUserDataById(1).then((res)=> {
                    this.allData = res.data[0];
                    this.hearImg = res.data[0].imgs[0];
                    //console.log(this.hearImg);
                    //console.log(this.allData.data[0].imgs[0]);
                })
            }
        },
        mounted() {
            this.getDatas();
        }
    }
</script>

<style scoped lang="scss">
.top{
    width: 750px;height: 462px;background-image: url("../assets/userimgs/user01.png");
    background-repeat: no-repeat;background-size: 100% 100%;overflow: hidden;
}
    .con{
        width: 684px;height: 292px;border-bottom: 1px solid #f5f5f5;margin-top:170px ;
        margin-left: 33px;background: #fff;/*border-radius: 30px;*/display: flex;justify-content: left; -webkit-border-top-left-radius: 30px;
        -webkit-border-top-right-radius: 30px;
        .head{
            width: 190px;height: 190px;background: #42b983;margin:44px 38px 0 44px;border-radius: 88px;position: relative;
            img{
                width: 190px;height: 190px;border-radius: 88px;
            }
            i{
                position: absolute;right:0; bottom: 0; background-image: url("../assets/userimgs/user02.png");
                background-repeat: no-repeat;background-size: 100% 100%;width: 54px;height: 54px;z-index: 2;
            }
        }
        p{
            width: 400px;height: 40px;font-size: 40px;color: #4a4a4a;font-weight: 800;line-height: 40px;margin-top: 96px;display: flex;justify-content: left;
            a{
                display: block;width: 40px;height: 40px;background-image: url("../assets/userimgs/user03.png");background-size: 100% 100%;
            }
        }
    }
.addrs{
    width: 400px;height: 30px;font-size: 30px;color: #9b9b9b;line-height: 30px;
    margin-top: 10px;text-align: left;
}
.main{
    width: 750px;height: 994px;background: #f9f9f9;
    .record{
        width: 684px;height: 132px;/*border-radius: 30px;*/margin-left: 33px;background: #fff;box-shadow: 0 0 10px #ccc;-webkit-border-bottom-left-radius:30px;
        -webkit-border-bottom-right-radius:30px;
        ul{
            display: flex;justify-content: space-around;width: 100%;height: 100%;
            li{
                p{
                    font-size: 24px;color: #c2c4ca;margin-top: 34px;
                }
                span{
                    display: block;color: #262628;font-size: 34px;font-weight: 800;
                }
            }
        }
    }
    .my-star{
        width: 684px;height: 304px;border-radius: 30px;margin-left: 33px;background: #fff;box-shadow: 0 0 10px #ccc;margin-top: 30px;
        ul{
            width: 100%;height: 100%;overflow: hidden;
        }
        li{
            width:100% ;height: 100px;font-size: 28px;color: #4a4a4a;border: 1px solid #f5f5f5;
            a{
                display: flex;justify-content: left;margin-top: 28px;margin-left: 22px;width: 618px;height: 44px;
                p{
                    font-size: 28px;color: #4a4a4a;margin-left: 24px;width: 200px;
                }
                i{
                    margin-left: 248px;color: #c2c4ca;font-weight: 800; font-size: 40px;
                }
            }
        }
        :nth-child(1){
                span{
                    display: block;width: 44px;height: 44px;background-image: url("../assets/userimgs/user04.png");background-size: 100% 100%;
                }
        }
        :nth-child(2){
                span{
                    display: block;width: 44px;height: 44px;background-image: url("../assets/userimgs/user05.png");background-size: 100% 100%;
                }
        }
        :nth-child(3){
            span{
                display: block;width: 44px;height: 44px;background-image: url("../assets/userimgs/user06.png");background-size: 100% 100%;
            }
        }
        p{
            font-size: 28px;color: #4a4a4a;margin-left: 24px;width: 200px;text-align: left;
        }
    }
    .my-star2{
        height: 500px;
        a{
            display: flex;justify-content: left;margin-top: 28px;margin-left: 22px;width: 618px;height: 44px;
            p{
                font-size: 28px;color: #4a4a4a;margin-left: 24px;width: 200px;text-align: left;
            }
            i{
                margin-left: 248px!important;color: #c2c4ca;font-weight: 800; font-size: 40px;
            }
            .love-i{
                margin-left: 420px;
            }
        }
        :nth-child(1){
            span{
                display: block;width: 44px;height: 44px;background-image: url("../assets/userimgs/user07.png");background-size: 100% 100%;
            }
        }
        :nth-child(2){
            span{
                display: block;width: 44px;height: 44px;background-image: url("../assets/userimgs/user08.png");background-size: 100% 100%;
            }
        }
        :nth-child(3){
            span{
                display: block;width: 44px;height: 44px;background-image: url("../assets/userimgs/user09.png");background-size: 100% 100%;
            }
        }
        :nth-child(4){
            span{
                display: block;width: 44px;height: 44px;background-image: url("../assets/userimgs/user10.png");background-size: 100% 100%;
            }
        }
        :nth-child(5){
            span{
                display: block;width: 44px;height: 44px;background-image: url("../assets/userimgs/user11.png");background-size: 100% 100%;
            }
        }
    }
    }
    .box{
        margin-bottom: 158px;
    }
</style>