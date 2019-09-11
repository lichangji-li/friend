<template>
    <div class="box">
        <div class="topall">
            <div class="head">
                <div class="top">
                        <p @click="goBack" class="addspan">&lt</p>
                    <b>免费vip升级</b>
                    <router-link to="1">
                        <p>跳过</p>
                    </router-link>
                </div>
            </div>
            <div class="heads">
                <i></i>
                <img :src="`../../imgs/${hearImg}`" alt="">
            </div>
        </div>
        <div class="free7">
            免费7天VIP体验
        </div>
        <ul class="vipul">
            <li>
                <router-link to="1">
                    <img src="../assets/userimgs/vip02.png" alt="谁喜欢你">
                    <div>
                        <h4>查看谁喜欢你</h4>
                        <p>你可以看到所有喜欢你的人</p>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="1">
                    <img src="../assets/userimgs/vip03.png" alt="谁访问你">
                    <div>
                        <h4>查看谁访问了你 </h4>
                        <p>你可以看到所有访问了你页面的人</p>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="1">
                    <img src="../assets/userimgs/vip04.png" alt="记录">
                    <div>
                        <h4>无限回看记录 </h4>
                        <p>你可以无限制的回看跟任何会员的所有聊天记录</p>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="1">
                    <img src="../assets/userimgs/vip05.png" alt="隐身">
                    <div>
                        <h4>隐身模式 </h4>
                        <p>你可以随时设置隐身模式</p>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="1">
                    <img src="../assets/userimgs/vip06.png" alt="隐身">
                    <div>
                        <h4>额外的最喜欢收藏 </h4>
                        <p>你可以设置多达10位最喜欢收藏会员</p>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="1">
                    <img src="../assets/userimgs/vip07.png" alt="隐身">
                    <div>
                        <h4>热门展示 </h4>
                        <p>你将会被展示在热门用户列表的最前面</p>
                    </div>
                </router-link>
            </li>
        </ul>
        <router-link to="/vip">
            <div class="begin">
                马上开始
            </div>
        </router-link>
        <div class="foot">
            在7天免费试用后，您的订阅费将每2个月自动更新39.99美元。
        </div>
    </div>
</template>

<script>
    import {getUserDataById} from "../api/index";
    export default {
        name: "freeVip",
        data:function(){
            return {
                hearImg:""
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            getDatas(){
                getUserDataById(1).then((res)=> {
                    this.hearImg = res.data[0].imgs[0];
                    console.log(this.hearImg);
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
    .topall{
        width: 750px;height: 735px;background-image: url("../assets/userimgs/vip01.png");background-repeat: no-repeat;background-size:cover;position: relative;
    }
    .head{
        width: 750px;height: 176px;overflow: hidden;
        .top{
            width: 750px;height: 64px;margin-top: 112px;font-size: 34px;color: #fff;display: flex;justify-content: space-between;overflow: hidden;
            span{
                font-weight: 800;font-size: 40px;color: #fff;margin-left: 30px;
                width: 100px;height: 60px;display: block;text-align: left;
            }
            b{
                font-weight: 400;
            }
            p{
                color: #fff;margin-right: 30px;
            }
        }
    }
    .heads{
        width: 190px;height: 190px;background: #42b983;margin:44px 38px 0 44px;border-radius: 88px;position: absolute;left: 240px;top: 370px;
        i{
            position: absolute;right:0; bottom: 0; background-image: url("../assets/userimgs/user02.png");
            background-repeat: no-repeat;background-size: 100% 100%;width: 54px;height: 54px;z-index: 2;
        }
        img{
            width: 190px;height: 190px;border-radius: 88px;
        }
    }
    .free7{
        width: 750px;height: 170px;font-size: 48px;color: #262628;text-align: center;line-height: 170px;
    }
    .vipul{
        li{
            width: 750px;height: 100px;margin-bottom: 48px;text-align: left;
            a{
                display: flex;justify-content: left;
                img{
                    width: 100px;height: 100px;border-radius: 50px;margin-right: 34px;
                }
                h4{
                    font-size: 34px;line-height: 44px;color: #4a4a4a;width: 600px;margin-top: 12px;
                }
                p{
                    font-size: 30px;line-height: 44px;color: #9b9b9b;width: 600px;margin-top: 6px;
                }
            }
        }
    }
    .begin{
        width: 686px;height: 90px;background-image: url("../assets/userimgs/vip08.png");
        background-repeat: no-repeat;background-size: 100% 100%;margin-left: 34px;font-size: 34px;color: #ffffff;line-height: 90px;
    text-align: center;
    }
    .foot{
        width: 650px;height: 164px;font-size: 30px;
        color: #4a4a4a;margin-left: 48px;text-align: center;margin-top: 94px;
    }
    .box{
        margin-bottom: 100px;
    }
</style>