<template>
  <div>
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card
          class="card"
          title="Total Cases"
          :head-style="cardHeadStyle"
          :body-style="cardBodyStyle"
        >
          {{ coronaData.world_total.total_cases }}
        </a-card></a-col
      >
      <a-col :span="8">
        <a-card
          class="card"
          :head-style="cardHeadStyle"
          :body-style="cardBodyStyle"
          title="Total Recovered"
        >
          {{ coronaData.world_total.total_recovered }}</a-card
        ></a-col
      >
      <a-col :span="8">
        <a-card
          class="card"
          :head-style="cardHeadStyle"
          :body-style="cardBodyStyle"
          title="Total Deaths"
        >
          {{ coronaData.world_total.total_deaths }}</a-card
        ></a-col
      >
    </a-row>

    <a-row :gutter="16" type="flex">
      <a-col :span="8">
        <a-card
          class="card"
          :head-style="cardHeadStyle"
          :body-style="cardBodyStyle"
          title="New Cases"
        >
          {{ coronaData.world_total.new_cases }}</a-card
        ></a-col
      >
      <a-col :span="8">
        <a-card
          class="card"
          :head-style="cardHeadStyle"
          title="Statistic Taken at"
          :body-style="cardBodyStyle"
        >
          {{ coronaData.world_total.statistic_taken_at }}
        </a-card></a-col
      >
      <a-col :span="8">
        <a-card
          class="card"
          :head-style="cardHeadStyle"
          :body-style="cardBodyStyle"
          title="New Deaths"
        >
          {{ coronaData.world_total.new_deaths }}</a-card
        ></a-col
      >
    </a-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "WorldData",
  data() {
    return {
      cardHeadStyle: {
        color: "#fff",
        fontWeight: "bold",
        transition: "all 1s ease-in-out",
        fontSize: "30px",
        border: "0 solid aqua",
      },
      cardBodyStyle: {
        color: "#FF9900",
        fontWeight: "bold",
        fontSize: "30px",
      },
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
<style>
.ant-card.card {
  border-radius: 20px;
  background: linear-gradient(to right, #172336, #243a54);
  text-align: center;
  margin: 10px;
}
.ant-card-body,
.ant-card-head-title {
  padding: 0 !important;
}
</style>
