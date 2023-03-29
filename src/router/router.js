import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../view/Home.vue";
import AboutMe from "../view/About.vue";
import CountryDetails from '../view/CountryDetails.vue'
Vue.use(VueRouter);

const routes = [
  { path: "/home", component: HomePage },
  { path: "/about", component: AboutMe },
  { path: "/details/:num", component: CountryDetails, name: "CountryDetails" },
];

const router = new VueRouter({
  routes,
});

export default router;
