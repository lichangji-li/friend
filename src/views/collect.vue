<template>
  <div class="collect">
    <h3>收藏</h3>
    <div class="allSerch">
      <div class="all-btn">
        <button class="col-btn btn-all" @click="isshow='v-a'">
          <i>34</i>
          <span>所有类别</span>
          <img src="../assets/images/collect-picm_09.png" alt v-if="show" @click="ptOpenDowOrUp()" />
          <img src="../assets/images/collect-picm_11.png" alt v-else @click="ptOpenDowOrUp()" />
        </button>
        <div class="all" v-if="show==true">
          <button @click="isshow='v-b'" class="col-btn btn-like">
            <i></i>
            <span>我喜欢的</span>
          </button>
          <button @click="isshow='v-c'" class="col-btn btn-love">
            <i></i>
            <span>我最爱的</span>
          </button>
        </div>
      </div>
    </div>

    <div id="a" v-if="isshow==='v-a'">
      <div class="col-content">
        <ul>
          <li>
            <img src="../assets/images/changran-01.jpg" alt />
            <span>Mt</span>
            <i>23</i>
          </li>
          <li>
            <img src="../assets/images/changran-01.jpg" alt />
            <span>Susie Delgado</span>
            <i>23</i>
          </li>
          <li>
            <img src="../assets/images/changran-01.jpg" alt />
            <span>Susie Delgado</span>
            <i>23</i>
          </li>
          <li>
            <img src="../assets/images/changran-01.jpg" alt />
            <span>Susie Delgado</span>
            <i>23</i>
          </li>
        </ul>
      </div>
    </div>
    <div id="b" v-if="isshow==='v-b'">
      <div>
        <h1>组建BBBBB</h1>
      </div>
    </div>
    <div id="c" v-else-if="isshow==='v-c'">
      <div>
        <h1>CCCCCCCC</h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "collect",
  data: function() {
    return {
      isshow: "v-a",
      show: false
    };
  },
  methods: {
    ptOpenDowOrUp: function() {
      this.show = !this.show;
    }
  }
};
</script>
<style lang="scss" scoped>
.collect{
    margin-bottom: 135px;
}
button {
  margin-bottom: 15px;
}
.collect h3 {
  font-size: 68px;
  font-weight: 900;
  color: #262628;
  text-align: left;
  margin-left: 34px;
  margin-top: 80px;
}
.col-btn {
  height: 80px;
  width: 684px;
  padding: 18px 24px 18px 24px;
  background-color: #e6e6e6;
  border: none;
  border-radius: 15px;
  text-align: left;
  position: relative;
  outline: none;
}
.btn-all i {
  background: linear-gradient(to right top, #ff6b95, #ff8960);
  display: inline-block;
  font-style: normal;
  color: #fff;
  padding: 2px 13px;
  border-radius: 20px;
}
.btn-all img {
  height: 17px;
  width: 30px;
  position: absolute;
  right: 20px;
  top: 35px;
}
.col-btn span {
  position: absolute;
  left: 100px;
  top: 17px;
  font-size: 34px;
  color: #4a4a4a;
}
.btn-like,
.btn-love {
  padding-left: 38px;
}
.btn-like i {
  display: block;
  height: 40px;
  width: 40px;
  background-image: url("../assets/images/collect-picm_06.png");
  background-size: 40px 40px;
}
.btn-love i {
  display: block;
  height: 40px;
  width: 40px;
  background-image: url("../assets/images/collect-picm_03.png");
  background-size: 40px 40px;
}
.col-content ul {
  border-top: 1px solid #b2b2b2;
  padding-top: 16px;
}
.col-content ul li {
  float: left;
  margin-left: 16px;
  position: relative;
  width: 352px;
  height: 460px;
  margin-bottom: 16px;
}
.col-content ul li img {
  width: 352px;
  height: 460px;
  border-radius: 20px;
}
.col-content ul li span {
  font-size: 30px;
  padding-left: 10px;
  width: 352px;
  z-index: 2;
  font-weight: 900;
  position: absolute;
  text-align: left;
  bottom: 14px;
  left:10px;
  color: #fff;
}
.col-content ul li i {
  height: 31px;
  width: 64px;
  font-size:22px;
  font-style: normal;
  position: absolute;
  right:10px;
  bottom: 14px;
  font-weight: normal;
  background-image: url("../assets/images/collect-picm_19.png");
  background-size: 64px 31px;
  display: block;
  color: #fff;
  padding-left:10px;
  padding-bottom:px;
  background-repeat:no-repeat;
}
</style>
