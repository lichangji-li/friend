<template>
  <div id="hot">
    <el-row :gutter="5">
      <el-col :span="12">
        <div class="hot_set">
          <div class="bg">
            <div class="hot_set_img">
              <img src="../../../public/imgs/icon_01.jpg" alt />
            </div>

            <p>把我自己设置为热门</p>
            <el-button type="danger" round>提交</el-button>
          </div>
        </div>
      </el-col>
      <el-col :span="12" v-for="item in user" :key="item.id">
        <div class="grid-content bg-purple" :style="getimg(item) ">
          <p class="name">
            <span class="name-li">{{item.name}}</span>
            <i class="el-icon-female">{{item.mydata !== undefined ? item.mydata.age : ''}}</i>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { GetUserList } from "../../api/index.js";
export default {
  name: "hot",
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
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].hot === "true") {
              //   console.log(response.data[i]);

              this.user.push(response.data[i]);
            }
          }
          //   this.user = response.data;
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

<style lang="scss">
#hot {
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
      line-height: 40px;
      padding: 0 5px;
      margin-bottom: 4px;
      font-size: 12px;
    }
  }
}
.hot_set {
  background: url("../../../public/imgs/youran-02.jpg") no-repeat center / cover;
  height: 230px;
  padding: 8px;
  &_img {
    width: 80px;
    height: 80px;
    background: #ff6b95;
    border-radius: 50%;
    text-align: center;
    line-height: 70px;
    box-sizing: border-box;
    border: 1px solid #ffffff;
  }
  .bg {
    background: rgba($color: #fff, $alpha: 0.6);
    height: 100%;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;
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
  .name-li{
    font-size: 30px;
  }
</style>

