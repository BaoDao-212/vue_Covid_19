<template>
  <a-chart :options="chartOptions"></a-chart>
</template>

<script>
export default {
  name: "CountryDetails",
  data() {
    return {
      chartOptions: {
        title: {
          text: "Tổng số ca mắc",
        },
        tooltip: {},
        xAxis: {
          type: "category",
          data: ["Active Cases"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Tổng số ca mắc",
            type: "bar",
            data: [+this.ActiveCases.replace(/,/g, "")],
          },
        ],
      },
    };
  },
  // mounted() {
  //   // Khởi tạo biểu đồ sau khi component đã được mount
  //   const chart = new Chart(this.$refs.chartRef);
  //   chart.setOption(this.chartOptions);
  // },
  computed: {
    num() {
      return this.$route.params.num;
    },
  },
  created() {
    console.log(this.$route.params.num);
  },
};
</script>
