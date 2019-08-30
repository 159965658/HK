<template>
  <div id="app">
    <!-- <AppLogo></AppLogo> -->
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import AppLogo from "@/components/logo";
import { Footer } from "@/components/index";
@Component({
  components: {
    Footer
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
// @import url("./assets/css/common.scss");
ol,
ul,
dl {
  list-style: none;
}

div,
ol,
ul,
p {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: $--color-primary;
  @include font();
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
</style>
