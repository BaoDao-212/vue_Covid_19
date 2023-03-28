<template>
  <div>
    <div class="label">
      <span class="world_data">World Data</span>
      <span class="live_updata">- Live Update in 2:30</span>
      <input
        class="input"
        type="text"
        name="name_country"
        v-model="searchTerm"
        placeholder="Your Country"
      />
    </div>
    <a-table
      :data-source="dataSource"
      :columns="columns"
      size="middle"
      :pagination="false"
      :scroll="{ y: 458, x: true }"
    >
    </a-table>
  </div>
</template>

<script>
export default {
  name: "RowTable1",
  props: {
    countries: Array,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    dataSource() {
      return this.countries
        .filter(
          (country) =>
            !this.searchTerm ||
            country.country_name
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase())
        )
        .map((country, index) => ({
          num: index + 1,
          Country: country.country_name,
          TotalCases: country.cases,
          TotalDeaths: country.deaths,
          TotalRecovered: country.total_recovered,
          Serious_Critical: country.serious_critical,
          ActiveCases: country.active_cases,
          NewDeaths: country.new_deaths,
          NewCases: country.new_cases,
          total_tests: country.total_tests,
          serious_critical: country.serious_critical,
          DeathsPer1MPopulation: country.deaths_per_1m_population,
          TestsPer1MPopulation: country.tests_per_1m_population,
        }));
    },

    columns() {
      const columns = [
        {
          title: "NUM",
          dataIndex: "num",
          width: 60,
          customCell: () => {
            return {
              style: {
                color: "#FFCF26",
              },
            };
          },
        },
        {
          title: "COUNTRY",
          dataIndex: "Country",
          width: 120,
          sorter: (a, b) => a.Country - b.Country,
          customCell: () => {
            return {
              style: {
                color: "white",
              },
            };
          },
        },
        {
          title: "TOTAL CASES",
          dataIndex: "TotalCases",
          width: 120,
          sorter: (a, b) =>
            parseInt(a.TotalCases.replace(/,/g, "")) -
            parseInt(b.TotalCases.replace(/,/g, "")),
          customCell: () => {
            return {
              style: {
                color: "#5FCE97",
              },
            };
          },
        },
        {
          title: "NEW CASES",
          dataIndex: "NewCases",
          width: 120,
          sorter: (a, b) => {
            const valA = a.NewCases === "N/A" ? "-1" : a.NewCases;
            const valB = b.NewCases === "N/A" ? "-1" : b.NewCases;
            return (
              parseInt(valA.replace(/,/g, "")) -
              parseInt(valB.replace(/,/g, ""))
            );
          },
          customCell: () => {
            return {
              style: {
                color: "#5FCE97",
              },
            };
          },
        },

        {
          title: "SERIOUS, CRITICAL",
          dataIndex: "Serious_Critical",
          sorter: (a, b) => {
            const valA =
              a.Serious_Critical === "N/A" ? "-1" : a.Serious_Critical;
            const valB =
              b.Serious_Critical === "N/A" ? "-1" : b.Serious_Critical;
            return (
              parseInt(valA.replace(/,/g, "")) -
              parseInt(valB.replace(/,/g, ""))
            );
          },
          width: 120,
          customCell: () => {
            return {
              style: {
                color: "#FF8C00",
              },
            };
          },
        },
        {
          title: "ACTIVE CASES ",
          dataIndex: "ActiveCases",
          sorter: (a, b) => {
            const valA = a.ActiveCases === "N/A" ? "-1" : a.ActiveCases;
            const valB = b.ActiveCases === "N/A" ? "-1" : b.ActiveCases;
            return (
              parseInt(valA.replace(/,/g, "")) -
              parseInt(valB.replace(/,/g, ""))
            );
          },
          width: 120,
          customCell: () => {
            return {
              style: {
                color: "#F8A132",
              },
            };
          },
        },
        {
          title: "TOTAL DEATHS ",
          dataIndex: "TotalDeaths",
          sorter: (a, b) => {
            const valA = a.TotalDeaths === "N/A" ? "-1" : a.TotalDeaths;
            const valB = b.TotalDeaths === "N/A" ? "-1" : b.TotalDeaths;
            return (
              parseInt(valA.replace(/,/g, "")) -
              parseInt(valB.replace(/,/g, ""))
            );
          },
          width: 120,
          customCell: () => {
            return {
              style: {
                color: "#CF3837",
              },
            };
          },
        },
        {
          title: "NEW DEATHS",
          dataIndex: "NewDeaths",
          sorter: (a, b) => {
            const valA = a.NewDeaths === "N/A" ? "-1" : a.NewDeaths;
            const valB = b.NewDeaths === "N/A" ? "-1" : b.NewDeaths;
            return (
              parseInt(valA.replace(/,/g, "")) -
              parseInt(valB.replace(/,/g, ""))
            );
          },
          width: 120,
          customCell: () => {
            return {
              style: {
                color: "#CF3837",
              },
            };
          },
        },
        {
          title: "TOTAL TEST ",
          dataIndex: "total_tests",
          sorter: (a, b) => a.total_tests - b.total_tests,
          width: 120,
          customCell: () => {
            return {
              style: {
                color: "#17BFB0",
              },
            };
          },
        },
        {
          title: "ACTIONS",
          width: 120,
          customCell: () => {
            return {
              style: {
                color: "#88BFB0",
              },
            };
          },
          customRender: (text, record) => {
            return (
              <router-link
                to={{
                  name: "CountryDetails",
                  params: {
                    num: record,
                  },
                }}
              >
                View Details
              </router-link>
            );
          },
        },
      ];

      return columns;
    },
  },
};
</script>
<style>
.ant-table-thead > tr > th {
  background: #1a1a2e !important;
  color: rgb(247, 248, 248) !important;
  padding: 0 0 0 10px !important;
  font-weight: bold !important;
  border-radius: 0 !important;
}
.ant-table-header {
  background: #1a1a2e !important;
}
.ant-table-thead > tr > th:hover {
  background-color: #083358 !important;
}
.ant-table tbody tr:nth-child(even) {
  background-color: #083358; /* Đặt màu nền cho hàng chẵn */
  padding: 0 !important;
}

.ant-table tbody tr:nth-child(odd) {
  background-color: #00204a; /* Đặt màu nền cho hàng lẻ */
  padding: 0 !important;
}
.ant-table-body {
  max-height: 500px;
  overflow-y: auto;
  line-height: 1 !important;
  font-weight: bold;
}
.world_data {
  font-size: 30px;
  color: aliceblue;
  padding: 0 10px;
}
.live_updata {
  font-size: 15px;
  color: aliceblue;
}
.label {
  position: relative;
  display: flex;
  align-items: baseline;
  background: #1a1a2e;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

input::placeholder {
  color: rgb(141, 137, 137);
  opacity: 1; /* Độ mờ của placeholder */
  padding-left: 10px;
}
input {
  background-color: #074f80;
  color: rgb(141, 137, 137);
  font-weight: bold;
  position: absolute;
  align-items: baseline;
  right: 16px;
  top: 8px;
  border-radius: 6px;
  border: 0;
  padding: 6px;
}
input:hover {
  transition: transform ease 2s;
  transform: scale(1.05);
}
.ant-table-body::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.ant-table-body::-webkit-scrollbar-track {
  background-color: #1a1a2e;
}

.ant-table-body::-webkit-scrollbar-thumb {
  background-color: #064670;
  border-radius: 20px;
  border: 3px solid #064670;
}

.ant-table-body::-webkit-scrollbar-thumb:hover {
  background-color: #255590;
}
.ant-table-wrapper {
  overflow-x: hidden !important;
}
router-link {
  padding: 5px;
  border: 2px solid #083358;
  border-radius: 3px;
  display: inline-block;
  transition: transform 0.2s ease-in-out;
  background-color: aqua !important;
}
router-link:hover {
  transform: scale(1.1);
}
</style>
