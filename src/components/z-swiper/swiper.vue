<template>
  <div class="swiper">
    <van-swipe vertical>
      <van-swipe-item v-for="(ele,index) in imgs" :key="ele.id" >
        <div class="s_img">
          <router-link :to="'/detail'+ele.id">
          <img :src="'/imgs/' + ele.imgs[(ele.imgs.length-1-index)<0 ?0:(ele.imgs.length-1)]" />
          </router-link>
          <div class="p_first">
            <div class="msg">{{ele.name}}</div>
            <div class="Adress">
              <div class="span1">{{ele.addr[0]+ele.addr[1]}}</div>
              <div class="span2">
                <a href="#">
                  <img src="../../assets/imgs/z_img/fandan.png" />
                </a>
                <span>{{ele.mydata.age}}</span>
              </div>
            </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
/*import { mapGetters } from "vuex";*/
import { mapActions, mapGetters } from "vuex";
Vue.use(Swipe).use(SwipeItem);
export default {
  name: "swiper",
  computed: {
    ...mapGetters('search', ['everyId'])
  },
  props: {
    imgs: Array,
  },
  mounted () {
    console.log('swiper', this.$store.state.search.count)
    console.log(this.$store.getters['search/BannerListimgs'])
  },
  methods:{
    ...mapActions('searchTag', ['getMsg'])
  },
  created () {
    this.getMsg()
  },
}
</script>

<style lang="scss">
.swiper {
  width: 750px;
  height: 100%;
  .van-swipe {
    width: 100%;
    height: 1000px;
    .s_img {
      height: 100%;
      width: 700px;
      background: #fff;
      box-sizing: border-box;
      border-radius: 20px;
      margin-left: 25px;
      img {
        height: 700px;
        width: 700px;
        border-radius: 20px 20px 0px 0px;
      }
      .p_first {
        width: 700px;
        background: #fff;
        margin-top: 90px;
        .msg {
          margin-top: 10px;
          font-weight: 700;
        }
        .Adress {
          display: flex;
          justify-content: center;
          margin-top: 10px;
          .span1 {
            color: #c5c5c5;
            font-size: 30px;
          }
          .span2 {
            display: block;
            width: 50px;
            height: 25px;
            margin-top: 10px;
            font-size: 12px;
            background: url(../../assets/imgs/z_img/beijin02.png) no-repeat;
            border-radius: 15px;
            position: relative;
            a {
              display: block;
              img {
                display: block;
                width: 15px;
                height: 20px;
                position: absolute;
                top: 4px;
                left: 7px;
              }
            }
            span {
              font-size: 10px;
              position: absolute;
              top: 4px;
              left: 21px;
              color: #f1d6cf;
            }
          }
        }
      }
    }
    .van-swipe__indicators {
      margin-left: 670px;
      margin-top: -300px;
      box-sizing: border-box;
    }
  }
}
</style>