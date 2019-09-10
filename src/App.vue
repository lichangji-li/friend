<template>
  <div id="app">
    <router-view/>
    <FooterTab></FooterTab>
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
*{margin:0;padding: 0;}
li{list-style:none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-link-active{
  &>i{
    background-position-x: -63px !important;
  }
}
</style>
