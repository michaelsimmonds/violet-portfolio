import Vue from "vue";
import Main from "./components/Main.vue";
import Router from "./router";
import "./style.scss";

new Vue({
  render: createEl => createEl(Main),
  router: Router
}).$mount("#app");
