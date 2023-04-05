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
  overflow-y: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: end;
  margin: 8px;
}
</style>
