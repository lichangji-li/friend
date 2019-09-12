<template>
  <div id="nearby">
    <div class="title">
      <span>附近的人</span>
      <router-link :to="{ path : '/screen'}">
        <i class="el-icon-s-operation"></i>
      </router-link>
    </div>

    <div class="content">
      <el-tabs v-model="activeName" stretch>
        <el-tab-pane label="所有人" name="first">
          <all></all>
        </el-tab-pane>
        <el-tab-pane label="最热门" name="second">
          <hot></hot>
        </el-tab-pane>
        <el-tab-pane label="最新" name="third">最新</el-tab-pane>
        <el-tab-pane label="最近" name="fourth">最近</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import All from "./All.vue";
import Hot from "./Hot.vue";
export default {
  name: "nearby",
  data() {
    return {
      activeName: "first",
      stretch: "true"
    };
  },
  components: {
    All,
    Hot
  }
};
</script>

<style lang="scss" >
#nearby {
  .title {
    height: 70px;
    background: #f7f7f7;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    font-size: 50px;
    font-weight: bold;
    .el-icon-s-operation {
      border-radius: 50%;
      background: #dedede;
      color: #fff;
      padding: 5px;
    }
  }
  .el-tabs__item{
    font-size: 30px;
  }
  .el-tabs__active-bar {
    background: #ff689a;
  }
  .el-tabs__nav-scroll {
    background: #f7f7f7;
  }
  .is-active {
    color: #ff689a;
  }
}
</style>
