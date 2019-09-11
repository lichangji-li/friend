// 引入axios:
import Axios from "axios";

//获取后台的数据:
export const getData = function() {
  var url = " http://localhost:3000/login";
  return Axios({
    method: "get",
    url: url
  });
};
