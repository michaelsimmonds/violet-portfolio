<template>
  <div class="about">
    <Burger />
    <Sidebar />
    <AboutDetails />
  </div>
</template>

<script>
import Burger from "./Burger/Burger.vue";
import Sidebar from "./Sidebar/Sidebar.vue";
import AboutDetails from "./AboutDetails/AboutDetails.vue";

export default {
  name: "About",
  components: {
    Burger,
    Sidebar,
    AboutDetails
  }
};
</script>
