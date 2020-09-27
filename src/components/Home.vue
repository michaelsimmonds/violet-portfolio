<template>
  <div class="homepage pos-relative">
    <Nav />
    <Hero />
  </div>
</template>

<script>
import Nav from "./Nav/Nav.vue";
import Hero from "./Hero/Hero.vue";
import { detectMouse } from "../assets/utilities";

export default {
  name: "Home",
  components: {
    Nav,
    Hero
  },
  mounted() {
    detectMouse();
  }
};
</script>
