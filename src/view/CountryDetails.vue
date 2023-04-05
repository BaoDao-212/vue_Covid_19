<template>
  <div>
    <div class="col1" id="details_covid19">
      <div>
        <div class="row1">
          <VueApexCharts
            id="details_covid191"
            :width="500"
            :height="500"
            style="background-color: #283149"
            type="bar"
            :options="chartOptions"
            :series="chartSeries"
          ></VueApexCharts>
          <VueApexCharts
            id="details_covid192"
            :width="500"
            :height="500"
            style="background-color: #283149"
            type="bar"
            :options="chartOptionbar"
            :series="seriesbar"
          ></VueApexCharts>
        </div>
        <label class="label1"
          >Biểu đồ tổng quan về Covid-19 của {{ this.Country }}</label
        >
      </div>
      <div class="details_card" id="details_covid193">
        <a-col :span="24">
          <a-card class="card_details" title="Total Cases">{{
            this.TotalCases
          }}</a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card_details" title="Active Cases">{{
            this.ActiveCases
          }}</a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card_details" title="Total Deaths">{{
            this.TotalDeaths
          }}</a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card_details" title="New Cases">{{
            this.NewCases
          }}</a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card_details" title="New Deaths">{{
            this.NewDeaths
          }}</a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card_details" title="Total Tests">{{
            this.TotalTests
          }}</a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card_details" title="TotalRecovered">{{
            this.TotalRecovered
          }}</a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card_details" title="Serious Critical">{{
            this.SeriousCritical
          }}</a-card>
        </a-col>
      </div>
    </div>
    <a-button
      class="button_dowload"
      type="primary"
      icon="download"
      @click="generatePDF"
    >
    </a-button>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export default {
  components: { VueApexCharts },
  data() {
    return {
      ActiveCases: this.$route.params.num.ActiveCases.replace(/[,]/g, ""),
      Country: this.$route.params.num.Country,
      DeathsPer1MPopulation:
        this.$route.params.num.DeathsPer1MPopulation.replace(/[,]/g, ""),
      NewCases: this.$route.params.num.NewCases.replace(/[,]/g, ""),
      NewDeaths: this.$route.params.num.NewDeaths.replace(/[,]/g, ""),
      SeriousCritical: this.$route.params.num.SeriousCritical.replace(
        /[,]/g,
        ""
      ),
      TestsPer1MPopulation: this.$route.params.num.TestsPer1MPopulation.replace(
        /[,]/g,
        ""
      ),
      TotalCases: this.$route.params.num.TotalCases.replace(/[,]/g, ""),
      TotalDeaths: this.$route.params.num.TotalDeaths.replace(/[,]/g, ""),
      TotalRecovered: this.$route.params.num.TotalRecovered.replace(/[,]/g, ""),
      TotalTests: this.$route.params.num.TotalTests.replace(/[,]/g, ""),
      chartOptions: {
        theme: {
          palette: "palette8", // upto palette10
        },
        chart: {
          id: "basic-bar",
        },
        dataLabels: {
          style: {
            colors: ["#5FCE97"],
            fontSize: "12px",
          },
        },
        grid: {
          dataLabels: {
            style: {
              colors: ["#00ff00"], // Green color
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#5FCE97", "#059da0", "#FF9900", "#CF3837"],
              fontSize: "12px",
            },
          },
        },
        colors: ["#02696f"],
        xaxis: {
          categories: ["New Cases", "ActiveCases", "Serious Critical"],
          labels: {
            style: {
              colors: ["#5FCE97", "#059da0", "#FF9900"],
              fontSize: "12px",
            },
          },
        },
      },
      chartSeries: [
        {
          name: "Cases",
          data: [
            this.$route.params.num.NewCases.replace(/[,]/g, ""),
            this.$route.params.num.ActiveCases.replace(/[,]/g, ""),
            this.$route.params.num.SeriousCritical.replace(/[,]/g, ""),
          ],
        },
      ],
      chartOptionbar: {
        chart: {
          id: "basic-bar",
        },
        dataLabels: {
          style: {
            colors: ["#5FCE97"],
            fontSize: "12px",
          },
        },
        grid: {
          dataLabels: {
            style: {
              colors: ["#00ff00"], // Green color
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#5FCE97", "#059da0", "#FF9900", "#CF3837"],
              fontSize: "12px",
            },
          },
        },
        colors: ["#02696f"],
        xaxis: {
          categories: [
            "Total Cases",
            "Total Recovered",
            "Total Tests",
            "Total Deaths",
          ],
          labels: {
            style: {
              colors: ["#5FCE97", "#059da0", "#FF9900", "#CF3837"],
              fontSize: "12px",
            },
          },
        },
        title: {
          text: "",
          align: "center",
          style: {
            fontSize: "16px",
            fontWeight: "bold",
            color: "aqua",
          },
        },
      },
      seriesbar: [
        {
          name: "Cases",
          data: [
            this.$route.params.num.TotalCases.replace(/[,]/g, ""),
            this.$route.params.num.TotalRecovered.replace(/[,]/g, ""),
            this.$route.params.num.TotalTests.replace(/[,]/g, ""),
            this.$route.params.num.TotalDeaths.replace(/[,]/g, ""),
          ],
        },
      ],
    };
  },
  methods: {
    async generatePDF() {
      const doc = new jsPDF();
      const options = { scale: 1, backgroundColor: "#c4cbaa" };
      const page1 = document.getElementById("details_covid191");
      const canvas1 = await html2canvas(page1, options);
      const imgData1 = canvas1.toDataURL("image/jpeg", 1.0);
      doc.addImage(imgData1, "JPEG", 40, 40);
      doc.addPage();
      const page2 = document.getElementById("details_covid192");
      const canvas2 = await html2canvas(page2, options);
      const imgData2 = canvas2.toDataURL("image/jpeg", 1.0);
      doc.addImage(imgData2, "JPEG", 40, 40);
      doc.addPage();
      const page3 = document.getElementById("details_covid193");
      const canvas3 = await html2canvas(page3, options);
      const imgData3 = canvas3.toDataURL("image/jpeg", 1.0);
      doc.addImage(imgData3, "JPEG", 40, 40);
      const namefile = this.Country + "_covid-details.pdf";
      doc.save(namefile);
    },
  },
};
</script>
<style>
.row1 {
  display: flex;
  flex-direction: row;
  justify-items: center;
  color: #333;
}
.details_card {
  text-align: center;
}
.card_details > .ant-card-head,
.card_details > .ant-card-body {
  background-color: #283149;
  color: #15f2ff;
  font-weight: bold;
  font-size: 20px;
  min-height: auto;
  padding: 6px;
}
.col1,
.label1 {
  background-color: #283149;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color: #15f2ff;
}
.button_dowload {
  background-color: #02696f;
  color: #1a00dd;
  width: 60px;
  height: 40px;
  margin: 20px 0 0 0;
}
</style>
