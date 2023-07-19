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
  mounted() {
    console.log('hi')
  },
  data() {
    return {
      gridImages: [
        { src: "static/images/watercolour/watercolour-1.jpeg" },
        { src: "static/images/watercolour/watercolour-2.jpeg" },
        { src: "static/images/watercolour/watercolour-3.jpeg" },
        { src: "static/images/watercolour/watercolour-4.jpeg" },
        { src: "static/images/watercolour/watercolour-5.jpeg" },
        { src: "static/images/watercolour/watercolour-6.jpeg" },
        { src: "static/images/watercolour/watercolour-7.jpeg" },
        { src: "static/images/watercolour/watercolour-8.jpeg" },
        { src: "static/images/watercolour/watercolour-9.jpeg" },
        { src: "static/images/watercolour/watercolour-11.jpeg" },
        { src: "static/images/watercolour/watercolour-12.jpeg" },
        { src: "static/images/watercolour/watercolour-13.jpeg" },
        { src: "static/images/watercolour/watercolour-14.jpeg" },
        { src: "static/images/watercolour/watercolour-16.jpeg" },
        { src: "static/images/watercolour/watercolour-17.jpeg" },
        { src: "static/images/watercolour/watercolour-18.jpeg" },
        { src: "static/images/watercolour/watercolour-21.jpeg" },
        { src: "static/images/watercolour/watercolour-22.jpeg" },
        { src: "static/images/watercolour/watercolour-23.jpeg" },
        { src: "static/images/watercolour/watercolour-24.jpeg" },
        { src: "static/images/watercolour/watercolour-25.jpeg" },
        { src: "static/images/watercolour/watercolour-25a.jpeg" },
        { src: "static/images/watercolour/watercolour-26.jpeg" },
        { src: "static/images/watercolour/watercolour-26a.jpeg" },
        { src: "static/images/watercolour/watercolour-27.jpeg" },
        { src: "static/images/watercolour/watercolour-28.jpeg" },
        { src: "static/images/watercolour/watercolour-29.jpeg" },
        { src: "static/images/watercolour/watercolour-30.jpeg" },
        { src: "static/images/watercolour/watercolour-31.jpeg" },
        { src: "static/images/watercolour/watercolour-32.jpeg" },
        { src: "static/images/watercolour/watercolour-33.jpeg" },
        { src: "static/images/watercolour/watercolour-34.jpeg" },
        { src: "static/images/watercolour/watercolour-35.jpeg" },
        { src: "static/images/watercolour/watercolour-36.jpeg" },
        { src: "static/images/watercolour/watercolour-37.jpeg" },
        { src: "static/images/watercolour/watercolour-38.jpeg" },
        { src: "static/images/watercolour/watercolour-39.jpeg" },
        { src: "static/images/watercolour/watercolour-40.jpeg" },
        { src: "static/images/watercolour/watercolour-41.jpeg" },
        { src: "static/images/watercolour/watercolour-42.jpeg" },
        { src: "static/images/watercolour/watercolour-43.jpeg" },
      ]
    }
  }
};
</script>
