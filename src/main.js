import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import dotenv from 'dotenv';
dotenv.config();
import router from "./router/router";
Vue.use(Antd);
Vue.config.productionTip = false;
console.log(process.env.RAPIDAPI_KEY);
console.log(process.env.RAPIDAPI_HOST);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
