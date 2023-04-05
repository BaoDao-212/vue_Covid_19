import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router/router";
import VueI18n from "vue-i18n";
import FlagIcon from "vue-flag-icon";
Vue.use(FlagIcon);
Vue.use(VueI18n);
Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
