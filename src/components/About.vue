<template>
  <div class="about">
    <Nav />
    <AboutDetails />
  </div>
</template>

<script>
import AboutDetails from "./AboutDetails/AboutDetails.vue";
import Nav from "./Nav/Nav.vue";

export default {
  name: "About",
  components: {
    AboutDetails,
    Nav
  }
};
</script>
