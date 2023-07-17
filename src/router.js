import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Gallery from "./pages/Gallery.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: Gallery
    },
    {
      path: "*",
      component: Home
    }
  ]
});
