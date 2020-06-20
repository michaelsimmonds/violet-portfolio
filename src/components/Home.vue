<template>
  <div class="container pos-relative">
    <Hero />
    <Burger />
    <Sidebar />
    <Grid />
  </div>
</template>

<script>
import Grid from "./Grid/Grid.vue";
import Burger from "./Burger/Burger.vue";
import Sidebar from "./Sidebar/Sidebar.vue";
import Hero from "./Hero/Hero.vue";

export default {
  name: "Home",
  components: {
    Grid,
    Burger,
    Sidebar,
    Hero
  }
};
</script>
