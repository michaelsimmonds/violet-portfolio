import Vue from "vue";
import Main from "./components/Main.vue";
import Router from "./router";
import "./style.scss";
import VueAnimate from "vue-animate-scroll";

Vue.use(VueAnimate);

new Vue({
  render: createEl => createEl(Main),
  router: Router
}).$mount("#app");
