import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Sculpture from "./pages/Sculpture.vue";
import DigitalIllustrations from "./pages/DigitalIllustrations.vue";
import WatercoloursAndDrawings from "./pages/WatercoloursAndDrawings.vue";

Vue.use(Router);

const router = new Router({
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
      path: "/sculpture",
      name: "Sculpture",
      component: Sculpture
    },
    {
      path: "/digital-illustrations",
      name: "Digital Illustrations",
      component: DigitalIllustrations
    },
    {
      path: "/watercolours-and-drawings",
      name: "Watercolours And Drawings",
      component: WatercoloursAndDrawings
    },
    {
      path: "*",
      component: Home
    }
  ],
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router;
