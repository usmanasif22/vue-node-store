import Vue from "vue";
import Router from "vue-router";
import Buy from "../components/Buy.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Buy",
      component: Buy
    }
  ],
  mode: "history"
});
