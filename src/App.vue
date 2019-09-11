<template>
  <div id="app">

      <router-view></router-view>

    
    <FooterTab></FooterTab>

  </div>
</template>
<script>
  import FooterTab from "./components/footerTab.vue";
  import router from "./router.js";

  export default {
    name: "app",
    components: {FooterTab},
  
  };
  </script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    img{
      display: block;
    }
    a{
      text-decoration: none;
    }
    ul,li{
      list-style: none;
    }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
.mu-elevation-4{
    box-shadow: none!important;
}



.router-link-active{
  &>i{
    background-position-x: -63px !important;
  }
}
.van-field__body{
  font-size: 16px!important;
}

</style>
