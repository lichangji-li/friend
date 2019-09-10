<template>
  <div id="all">
    <el-row :gutter="5">
      <el-col :span="12" v-for="item in user" :key="item.id">
        <div class="grid-content bg-purple" :style="getimg(item) ">
          <p class="name">
            <span>{{item.name}}</span>
            <i class="el-icon-female">{{item.mydata !== undefined ? item.mydata.age : ''}}</i>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { GetUserList } from "../../api/axios.js";
export default {
  name: "all",
  data: function() {
    return {
      user: []
    };
  },
  methods: {
    getlist() {
      var p1 = GetUserList();
      p1.then(response => {
        if (response.status == 200) {
          this.user = response.data;
          //   console.log(this.user);
        }
      });
    },

    getimg(item) {
      if (item.imgs) {
        return (
          "background: url(/imgs/" + item.imgs[0] + ") no-repeat center / cover"
        );
      } else {
        return "background: #ccc";
      }
    }
  },
  mounted: function() {
    this.getlist();
  }
};
</script>

<style lang="scss" scoped>
#all {
  padding: 0 5px;
  .name {
    color: #fff;
    width: 100%;
    display: flex;
    padding: 0 12px;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    i {
      background: #ff6b95;
      border-radius: 8px;
      text-align: center;
      line-height: 20px;
      padding: 0 5px;
      margin-bottom: 4px;
      font-size: 12px;
    }
  }
}

.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  height: 230px;
  margin-bottom: 5px;
  position: relative;
}
</style>

