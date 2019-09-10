<template>
    <div class="box">
        <div class="head">
            <div class="top">
                    <span @click="goBack">&lt</span>
                <b>编辑资料</b>
                <router-link to="/user">
                    <p>完成</p>
                </router-link>
            </div>
        </div>
        <div class="picture">
            <div class="picture-top">
                <div class="picture-top-all picture-top-1">
                    <div class="picture-top-2" v-if="hearImg[0]?false:true">
                        <span class="jia">+</span>
                    </div>
                    <img :src="`../../imgs/${hearImg[0]}`" alt="个人照片" v-else>

                </div>
                <div class="picture-top-right">
                    <div class="picture-top-all picture-top-2">
                        <div class="picture-top-2" v-if="hearImg[1]?false:true">
                            <span class="jia">+</span>
                        </div>
                        <img :src="`../../imgs/${hearImg[1]}`" alt="个人照片" v-else>
                    </div>
                    <div class="picture-top-all picture-top-3">
                        <div class="picture-top-2" v-if="hearImg[2]?false:true">
                        <span class="jia">+</span>
                    </div>
                        <img :src="`../../imgs/${hearImg[2]}`" alt="个人照片" v-else>
                    </div>
                </div>
            </div>
            <div class="picture-bottom">
                <div class="picture-top-all picture-top-2">
                    <div class="picture-top-2" v-if="hearImg[3]?false:true">
                        <span class="jia">+</span>
                    </div>
                    <img :src="`../../imgs/${hearImg[3]}`" alt="个人照片" v-else>
                </div>
                <div class="picture-top-all picture-top-2">
                   <div class="picture-top-2" v-if="hearImg[4]?false:true">
                        <span class="jia">+</span>
                    </div>
                    <img :src="`../../imgs/${hearImg[4]}`" alt="个人照片" v-else>
                </div>
                <div class="picture-top-all picture-top-2">
                    <div class="picture-top-2" v-if="hearImg[5]?false:true">
                        <span class="jia">+</span>
                    </div>
                  <img :src="`../../imgs/${hearImg[5]}`" alt="个人照片" v-else>
                    <!-- <img src="" alt="个人照片" >-->
                </div>
            </div>
        </div>
        <div class="userCompileMain">
            <ul>
                <li>
                    <router-link to="/user">
                        <span>用户名</span>
                        <p>{{allData.username}}</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/user">
                        <span>年龄</span>
                        <p>{{allData.mydata.age}}<b>&gt</b></p>

                    </router-link>
                </li>
                <li>
                    <router-link to="/user">
                        <span>性别</span>
                        <p>{{allData.mydata.sex}}<b>&gt</b></p>

                    </router-link>
                </li>
            </ul>
            <div class="userAbout">
                <h2>关于我</h2>
                <p>
                {{allData.about}}
                </p>
            </div>
            <ul>
                <li>
                    <router-link to="/user">
                        <span>身高</span>
                        <p>177<b>&gt</b></p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/user">
                        <span>体重</span>
                        <p>70kg<b>&gt</b></p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/user">
                        <span>感情状态</span>
                        <p>单身<b>&gt</b></p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/user">
                        <span>正在查找</span>
                        <p>结婚对象<b> &gt </b></p>
                    </router-link>
                </li>
            </ul>
                <div class="userHobby">
                    <h2>兴趣</h2>
                    <div class="fenlei">
                        <template v-for="ele in allData.hoppy">
                            <router-link to="/user">
                                <span>{{ele}}</span>
                            </router-link>
                        </template>
                        <!--<router-link to="/user">
                            <span>看电影</span>
                        </router-link>
                        <router-link to="/user">
                            <span>看电影</span>
                        </router-link>
                        <router-link to="/user">
                            <span>看电影</span>
                        </router-link>
                        <router-link to="/user">
                            <span>看电影</span>
                        </router-link>
                        <router-link to="/user">
                            <span>看电影</span>
                        </router-link>-->
                    </div>
                    <router-link to="/user">
                        <div class="moseHobby">
                            添加更多兴趣点
                        </div>
                    </router-link>
                    <div class="location">
                        <h2>位置</h2>
                        <div class="location-x">
                            <img src="../assets/userimgs/user12.png" alt="">
                            <p>目前位置</p>
                            <b>{{allData.addr[0]+allData.addr[1]}}</b>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    import {getUserDataById} from "../api/index";
    export default {
        name: "userCompile",
        data:function () {
            return {
                hearImg:[],
                allData:[],
                hed:true
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            getDatas(){
                getUserDataById(1).then((res)=> {
                    this.allData = res.data[0];
                    //console.log(this.allData.data[0].imgs[0]);
                    console.log(this.allData);
                    this.allData.imgs.forEach((ele)=> {
                        this.hearImg.push(ele);
                    })
                    console.log(this.hearImg);
                })
            }
        },
        mounted() {
            this.getDatas();
        }
    }
</script>

<style scoped lang="scss">
    .box{
        overflow: hidden;
        margin-bottom: 158px;

    }
.head{
    width: 750px;height: 176px;border: 1px solid #a9a9a9;
    .top{
        width: 750px;height: 64px;margin-top: 112px;font-size: 34px;color: #4a4a4a;display: flex;justify-content: space-between;
        span{
            font-weight: 800;font-size: 40px;color: #4a4a4a;margin-left: 30px;
            width: 100px;height: 60px;display: block;text-align: left;
        }
        b{
            font-size: 300;
        }
        p{
            color: #ff689a;margin-right: 30px;
        }
    }
}
    .picture{
        width: 750px;height: 747px;background: #f2f2f2;
        .picture-top-all{
            width: 450px;height: 450px;border-radius: 15px;
        }
        .picture-top{
            width: 686px;height: 450px;margin: 40px auto;display: flex;justify-content: space-between;
            .picture-top-1{
                margin-right: 24px;background: #c1c0c9;border-radius: 30px;
                img{
                    width: 100%;height: 100%;border-radius: 30px;
                }
            }
            .picture-top-3{
                width: 212px;height: 212px;margin-top: 28px;margin-right: 24px;background: #c1c0c9;border-radius: 15px;
                img{
                    width: 100%;height: 100%;border-radius: 15px;
                }
            }
        }
        .picture-top-2{
            width: 212px;height: 212px;margin-right: 24px;background: #c1c0c9;border-radius: 15px;font-size: 60px;
            img{
                width: 100%;height: 100%;border-radius: 15px;
            }
        }
        .picture-bottom{
            display: flex;justify-content: space-between;width: 686px;margin: 50px auto;
        }
    }
    .userCompileMain{
        width: 750px;height: 2030px;
        ul{
            li{
                width: 716px;height: 122px;border-bottom: 2px solid #efefef;margin-left: 34px;font-size: 30px;
                a{
                    color: #6c6c6c;display: flex;justify-content: space-between;line-height: 122px;
                    p{
                        text-align: right;margin-right: 30px;width: 200px;
                    }
                    b{
                        text-align: right;margin-left: 20px;
                    }
                }
            }
        }
        .userAbout{
            width: 716px;margin-left: 34px;height: 274px;border-bottom: 2px solid #efefef;
            h2{
                color: #4a4a4a;font-size: 34px;text-align: left;margin-top: 88px;font-weight: 800;
            }
            p{
                color: #4a4a4a;font-size: 34px;line-height: 44px;margin-top: 34px;text-align: left;padding-right: 30px;
            }
        }
    }
    .userHobby{
        height: 322px;width: 716px;margin-left: 34px;
        h2{
            color: #4a4a4a;font-size: 34px;text-align: left;margin-top: 88px;font-weight: 800;margin-bottom: 40px;
        }
        span{
            color: #4a4a4a;font-size: 34px;line-height: 44px;display: block;width: 154px;height: 68px;border: 2px solid #dad9e2;border-radius: 30px;text-align: center;line-height: 68px;margin-top: 30px;margin-right: 30px;
        }
        .fenlei{
            display: flex;justify-content: left;flex-wrap:wrap ;
        }
        .moseHobby{
            width: 682px;height: 84px;border: 1px solid #ff689a;border-radius: 30px;margin-top: 50px;font-size: 34px;line-height:84px ;text-align: center;color:#ff689a ;
        }
    }
    .location{
        width: 716px;height: 254px;border-bottom:2px solid #dad9e2;
        h2{
            margin-top: 80px;
        }
        img{
            width: 25px;height: 38px;margin-right: 10px;
        }
        .location-x{
            display: flex;justify-content: left;
            p{
                font-size: 34px;line-height: 44px;color: #4a4a4a;
            }
            b{
                color: #9b9b9b;font-size: 34px;line-height: 44px;font-width: 300;width: 500px;text-align: right;
            }
        }
    }
    .jia{
        display: block;width: 50px;height: 50px;color: red;font-size: 80px;font-weight: 800;margin: auto;
    }
</style>