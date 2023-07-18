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
        { src: "static/images/digital/digital-1.jpeg" },
        { src: "static/images/digital/digital-2.jpeg" },
        { src: "static/images/digital/digital-3.jpeg" },
        { src: "static/images/digital/digital-4.jpeg" },
        { src: "static/images/digital/digital-5.jpeg" },
        { src: "static/images/digital/digital-6.jpeg" },
        { src: "static/images/digital/digital-7.jpeg" },
        { src: "static/images/digital/digital-8.jpeg" },
        { src: "static/images/digital/digital-9.jpeg" },
        { src: "static/images/digital/digital-10.jpeg" },
        { src: "static/images/digital/digital-11.jpeg" },
        { src: "static/images/digital/digital-12.jpeg" },
        { src: "static/images/digital/digital-13.jpeg" },
        { src: "static/images/digital/digital-14.jpeg" },
        { src: "static/images/digital/digital-15.jpeg" },
      ]
    }
  }
};
</script>
