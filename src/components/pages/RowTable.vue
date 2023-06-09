<template>
  <div>
    <div class="label">
      <input
        class="input"
        type="text"
        name="name_country"
        v-model="searchTerm"
        placeholder="Your Country"
      />
      <a-button class="export_button" @click="exportToExcel">
        Export To Excel</a-button
      >
    </div>

    <a-table
      :data-source="dataSource"
      :columns="columns"
      size="middle"
      :pagination="false"
      :scroll="{ y: 340, x: true }"
    >
    </a-table>
  </div>
</template>

<script>
import * as ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import "/node_modules/flag-icons/css/flag-icons.min.css";
// eslint-disable-next-line
import countries from "../../country.config";

import { countryToAlpha2 } from "country-to-iso";
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
          SeriousCritical: country.serious_critical,
          ActiveCases: country.active_cases,
          NewDeaths: country.new_deaths,
          NewCases: country.new_cases,
          TotalTests: country.total_tests,
          DeathsPer1MPopulation: country.deaths_per_1m_population,
          TestsPer1MPopulation: country.tests_per_1m_population,
        }));
    },

    columns() {
      const columns = [
        {
          title: "NUM",
          dataIndex: "num",
          width: 40,
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
          customRender: (text, record) => {
            const countryCode =
              countryToAlpha2(record.Country) !== null
                ? countryToAlpha2(record.Country)
                : countries[record.Country];
            return (
              <div>
                {countryCode ? (
                  <flag iso={countryCode.toLowerCase()}></flag>
                ) : (
                  <flag iso="un"></flag>
                )}
                <span>{record.Country}</span>
              </div>
            );
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
          dataIndex: "SeriousCritical",
          sorter: (a, b) => {
            const valA = a.SeriousCritical === "N/A" ? "-1" : a.SeriousCritical;
            const valB = b.SeriousCritical === "N/A" ? "-1" : b.SeriousCritical;
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
          dataIndex: "TotalTests",
          sorter: (a, b) => {
            const valA = a.TotalTests === "N/A" ? "-1" : a.TotalTests;
            const valB = b.TotalTests === "N/A" ? "-1" : b.TotalTests;
            return (
              parseInt(valA.replace(/,/g, "")) -
              parseInt(valB.replace(/,/g, ""))
            );
          },
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

  methods: {
    async exportToExcel() {
      const data = this.dataSource;
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Report");
      const cell = worksheet.getCell("E1");
      cell.value = "Global Covid-19 status";
      cell.font = { bold: true, size: 16 };
      const headers = [
        "Number",
        "Flag",
        "Country",
        "Total Cases",
        "Total Deaths",
        "New Cases",
        "Total Recovered",
        "Serious Critical",
        "TotalTests",
        "Active Cases",
        "New Deaths",
        "Deaths Per 1 Milion People",
        "Tests Per 1 Milion People",
      ];
      const headerRow = worksheet.addRow(headers);
      // eslint-disable-next-line
      for (const row of data) {
        //create a new flag country
        const countryCode =
          countryToAlpha2(row.Country) !== null
            ? countryToAlpha2(row.Country)
            : countries[row.Country];
        // eslint-disable-next-line
        const code = countryCode ? countryCode.toLowerCase() : "un";
        // const imageUrl = require(`@/assets/${code}.svg`).toString();
        // console.log(imageUrl);
        const response = await fetch(
          require(`@/assets/${code}.svg`).toString()
        );
        const imageBuffer = await response.arrayBuffer();
        const imageId = await workbook.addImage({
          buffer: imageBuffer,
          extension: "svg",
        });

        // console.log(imageBuffer);
        // worksheet.addBackgroundImage(imageId);
        worksheet.addImage(imageId, {
          tl: { col: 1, row: imageId + 2 },
          br: { col: 2, row: imageId + 3 },
          editAs: "oneCell",
        });
        worksheet.addRow([
          row.num,
          "",
          row.Country,
          parseInt(row.TotalCases.replace(/,/g, "")),
          parseInt(row.TotalDeaths.replace(/,/g, "")),
          parseInt(row.NewCases.replace(/,/g, "")),
          parseInt(row.TotalRecovered.replace(/,/g, "")),
          parseInt(row.SeriousCritical.replace(/,/g, "")),
          parseInt(row.ActiveCases.replace(/,/g, "")),
          parseInt(row.TotalTests.replace(/,/g, "")),
          parseInt(row.NewDeaths.replace(/,/g, "")),
          parseInt(row.DeathsPer1MPopulation.replace(/,/g, "")),
          parseInt(row.TestsPer1MPopulation.replace(/,/g, "")),
        ]);
      }

      worksheet.columns.forEach((column, index) => {
        if (index != 4 && index != 1) {
          let maxLength = 0;
          column.eachCell((cell) => {
            const columnLength = cell.value ? cell.value.toString().length : 0;
            if (columnLength > maxLength) {
              maxLength = columnLength;
            }
          });
          column.width = maxLength < 10 ? 10 : maxLength + 2;
        } else if (index == 4) {
          column.width = 10;
        } else {
          column.width = 4;
        }
      });
      headerRow.eachCell((cell) => {
        cell.font = { bold: true };
      });

      const buffer = await workbook.xlsx.writeBuffer();
      saveAs(new Blob([buffer]), "report.xlsx");
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
  padding: 10px;
}

input::placeholder {
  color: rgb(141, 137, 137);
  opacity: 1; /* Độ mờ của placeholder */
  text-align: center;
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
  transition: transform ease 1s;
}
input:hover {
  transform: scale(1.05);
  background-color: #00204a;
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
.export_button {
  background-color: #074f80;
  padding: 2px;
  margin-left: 20px;
  color: #838588;
  transition: transform ease 15s;
  font-weight: bold;
}
.export_button:hover {
  background-color: #00204a;
  transform: scale(1.05);
}
span {
  padding-left: 5px;
}
</style>
