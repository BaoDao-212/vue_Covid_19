<template>
  <div class="container">
    <HeaderWeb></HeaderWeb>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import store from "./store/store";
import HeaderWeb from "./components/ele_pages/HeaderWeb.vue";
export default {
  name: "App",
  components: {
    HeaderWeb,
  },
  store,
};
</script>
<style>
.container {
  background-color: #283149;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: end;
  margin-top: 60px;
}
</style>
