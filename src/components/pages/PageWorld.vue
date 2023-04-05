<template>
  <div>
    <RowTable
      :countries="this.coronaData.countries_stat"
      :page-size="pageSize"
      :current-page.sync="currentPage"
    ></RowTable>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import RowTable from "./RowTable";
export default {
  name: "TableData",
  components: {
    RowTable,
  },
  data() {
    console.log(this.flagData);
    return {
      countriesData: [],
    };
  },
  computed: {
    ...mapGetters(["coronaData"]),
  },
  created() {
    this.fetchCoronaData();
  },
  methods: {
    ...mapActions(["fetchCoronaData"]),
  },
};
</script>
