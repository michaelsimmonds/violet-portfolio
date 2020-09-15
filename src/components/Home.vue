<template>
  <div class="homepage pos-relative">
    <Nav />
    <div class="container pos-relative">
      <Hero />
      <Grid />
    </div>
  </div>
</template>

<script>
import Nav from "./Nav/Nav.vue";
import Hero from "./Hero/Hero.vue";
import Grid from "./Grid/Grid.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Hero,
    Grid
  }
};
</script>
