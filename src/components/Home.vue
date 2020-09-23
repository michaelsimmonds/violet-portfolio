<template>
  <div class="homepage pos-relative">
    <Nav />
    <Hero />
  </div>
</template>

<script>
import Nav from "./Nav/Nav.vue";
import Hero from "./Hero/Hero.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Hero
  }
};
</script>
