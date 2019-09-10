<template>
  <div>
    <ul class="footerTab">
      <li>
        <router-link to="/index">
        <i></i>
        </router-link>
      </li>
      <li>
        <router-link to="/nearby">
        <i></i>
        </router-link>
      </li>
      <li>
        <router-link to="/collect">
        <i></i>
        </router-link>
      </li>
      <li>
        <router-link to="/message">
        <i></i>
        </router-link>
      </li>
      <li>
        <router-link to="/myself">
        <i></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '.footerTab'
};
</script>
<style scoped lang="scss">
.footerTab{
    height:135px;
    width:100%;
    background-color: #f8f8f8;
    display:flex;
    justify-content: space-around;
    position:fixed;
    bottom: 0;
    padding-top:30px;
}
.footerTab li:nth-of-type(1) i{
    height:50px;
    width:50px;
    background-image: url('../assets/images/tab-picm.png');
    background-position: -3px -3px;
    background-repeat: no-repeat;
    display: block;
    background-size: 120px 300px;
}
.footerTab li:nth-of-type(2) i{
    height:50px;
    width:50px;
    background-image: url('../assets/images/tab-picm.png');
    background-position: -3px -243px;
    background-repeat: no-repeat;
    display: block;
    // transform: scale(0.5) 
    background-size: 120px 300px;
}
.footerTab li:nth-of-type(3) i{
    height:50px;
    width:50px;
    background-image: url('../assets/images/tab-picm.png');
    background-position: -3px -63px;
    background-repeat: no-repeat;
    display: block;
    // transform: scale(0.5) 
    background-size: 120px 300px;
}
.footerTab li:nth-of-type(4) i{
    height:50px;
    width:50px;
    background-image: url('../assets/images/tab-picm.png');
    background-position: -3px -123px;
    background-repeat: no-repeat;
    display: block;
    // transform: scale(0.5) 
    background-size: 120px 300px;
}
.footerTab li:nth-of-type(5) i{
    height:50px;
    width:50px;
    background-image: url('../assets/images/tab-picm.png');
    background-position: -3px -183px;
    background-repeat: no-repeat;
    display: block;
    // transform: scale(0.5) 
    background-size: 120px 300px;
}
// .footerTab a {
//   background-position-x: -63px；
// }
</style>