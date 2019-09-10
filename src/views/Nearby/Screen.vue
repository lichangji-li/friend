<template>
  <div id="screen">
    <div class="title">
      <span>筛选</span>
      <router-link to="/nearby">
        <p @click="clickhander">完成</p>
      </router-link>
    </div>
    <div class="content">
      <div class="check">
        <p class="txt">显示</p>
        <div class="radio">
          <el-radio-group v-model="radio" fill="#ff6b95">
            <el-radio-button label="男士"></el-radio-button>
            <el-radio-button label="女士"></el-radio-button>
            <el-radio-button label="全部"></el-radio-button>
          </el-radio-group>
        </div>
      </div>

      <div class="position">
        <p class="txt">位置</p>
        <div class="now-position">
          <div class="bg">
            <span>目前位置</span>
            <span>&nbsp; (洛杉矶)</span>
            <i class="el-icon-location"></i>
          </div>
        </div>
      </div>

      <div class="gap">
        <p class="txt">
          距离
          <span class="fr">{{gap}} km</span>
        </p>
        <div class="block">
          <span class="demonstration"></span>
          <el-slider v-model="gap"></el-slider>
        </div>
      </div>
    </div>

    <div class="gap">
      <p class="txt">
        年龄
        <span class="fr">{{age[0]}} - {{age[1]}}</span>
      </p>
      <div class="block">
        <span class="demonstration"></span>
        <el-slider v-model="age" range :min="18" :max="70"></el-slider>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "screen",
  data: function() {
    return {
      radio: "全部",
      gap: 20,
      age: [18, 25]
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
    clickhander() {
      console.log("根据当前页面的val重新发请求并筛选数据");
    }
  }
};
</script>

<style lang="scss">
#screen {
  .fr {
    float: right;
  }
  .title {
    height: 70px;
    background: #f7f7f7;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    border-bottom: 1px solid #b2b2b2;
    p {
      font-size: 16px;
      color: #ff689a;
      font-weight: normal;
    }
  }
  .radio {
    padding: 15px;
  }
  .el-radio-button__inner {
    width: 115px;
  }
  .txt {
    margin-top: 40px;
    padding: 0px 16px;
    font-size: 16px;
  }
  .now-position {
    color: #c1c0c9;
    padding: 15px;
    .bg {
      background: #efefef;
      height: 50px;
      border-radius: 4px;
      padding: 15px 8px;
      i {
        float: right;
        font-size: 24px;
      }
      span:first-child {
        color: #000;
      }
    }
  }
  .block {
    padding: 18px;
    .el-slider__button {
      border: 2px solid #fff;
      background: #ff689a;
      height: 30px;
      width: 30px;
    }
    .el-slider__bar {
      background: #ff689a;
    }
  }
}
</style>
