<template>
  <div class="container">
    <div id="app">
      <WorldData />
      <TableData />
    </div>
  </div>
</template>

<script>
import WorldData from "../components/pages/WorldData.vue";
import TableData from "../components/pages/PageWorld.vue";
export default {
  name: "HomePage",
  components: {
    WorldData,
    TableData,
  },
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
