<template>
  <div class="galery pos-relative">
    <div class="container pos-relative">
      <Grid />
    </div>
  </div>
</template>

<script>
import Grid from "./Grid/Grid.vue";

export default {
  name: "Gallery",
  components: {
    Grid
  }
};
</script>
