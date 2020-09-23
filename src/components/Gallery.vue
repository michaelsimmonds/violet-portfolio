<template>
  <div class="galery pos-relative">
    <Nav />
    <div class="container pos-relative">
      <Grid />
    </div>
  </div>
</template>

<script>
import Nav from "./Nav/Nav.vue";
import Grid from "./Grid/Grid.vue";

export default {
  name: "Gallery",
  components: {
    Nav,
    Grid
  }
};
</script>
