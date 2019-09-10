<template>
    <div class="box">
        <div class="head">
            <div class="top">
                    <span @click="goBack">&lt</span>
                <b>vip中心</b>
                <router-link to="1">
                    <p>历史</p>
                </router-link>
            </div>
        </div>
        <div class="vipall">
            <div>ssssssssssss</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vip",
        methods:{
            goBack(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped lang="scss">

    .head{
        width: 750px;height: 176px;border: 1px solid #a9a9a9;overflow: hidden;
        .top{
            width: 750px;height: 64px;margin-top: 112px;font-size: 34px;color: #4a4a4a;display: flex;justify-content: space-between;overflow: hidden;
            span{
                font-weight: 800;font-size: 40px;color: #4a4a4a;margin-left: 30px;
                width: 100px;height: 60px;display: block;text-align: left;
            }
            b{
                font-weight: 400;
            }
            p{
                color: #ff689a;margin-right: 30px;
            }
        }
    }
    .vipall{
            width: 750px;height: 1038px;background-image: url("../assets/userimgs/vipbg.png");
            background-repeat: no-repeat;background-size:cover;


    }
</style>