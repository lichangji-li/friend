<template>
  <div id="app">
<<<<<<< HEAD
      <router-view></router-view>
=======
    <router-view/>
    <FooterTab></FooterTab>
>>>>>>> 76b8694828d1d22a57eab1560c2c9a2faa482dd8
  </div>
</template>
<script>
  import FooterTab from "./components/footerTab.vue";

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
<<<<<<< HEAD

=======
.router-link-active{
  &>i{
    background-position-x: -63px !important;
  }
}
>>>>>>> 76b8694828d1d22a57eab1560c2c9a2faa482dd8
</style>
