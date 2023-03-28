import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../view/Home.vue";
import CountryDetails from '../view/CountryDetails.vue'
Vue.use(VueRouter);

const routes = [
  { path: "/home", component: HomePage },
  { path: "/details/:num", component: CountryDetails, name: "CountryDetails" },
];

const router = new VueRouter({
  routes,
});

export default router;
