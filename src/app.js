import "./style.scss";
import Vue from "vue";
import Main from "./Main.vue";
import Router from "./router";
import VueAnimate from "vue-animate-scroll";
Vue.use(VueAnimate);
import "lazysizes";

new Vue({
  render: createEl => createEl(Main),
  router: Router
}).$mount("#app");
