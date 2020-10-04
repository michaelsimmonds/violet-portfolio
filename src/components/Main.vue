<template>
  <div>
    <Nav />
    <router-view></router-view>
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
