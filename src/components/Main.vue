<template>
  <div>
    <router-view></router-view>
    <Nav />
  </div>
</template>

<script>
import Nav from "./Nav/Nav.vue";
import { detectMouse } from "../assets/utilities";

export default {
  name: "Main",
  components: {
    Nav
  },
  mounted() {
    detectMouse();
  }
};
</script>
