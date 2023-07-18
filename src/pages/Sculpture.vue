<template>
  <div class="pos-relative">
    <div class="container pos-relative">
      <Grid :images="gridImages" />
    </div>
  </div>
</template>

<script>
import Grid from "../components/Grid/Grid.vue";

export default {
  name: "Gallery",
  components: {
    Grid
  },
  data() {
    return {
      gridImages: [
        { src: "static/images/sculpture/sculpture-1.jpeg" },
        { src: "static/images/sculpture/sculpture-2.jpeg" },
        { src: "static/images/sculpture/sculpture-3.jpeg" },
        { src: "static/images/sculpture/sculpture-4.jpeg" },
        { src: "static/images/sculpture/sculpture-5.jpeg" },
        { src: "static/images/sculpture/sculpture-7.jpeg" },
        { src: "static/images/sculpture/sculpture-6.jpeg" },
      ]
    }
  }
};
</script>
