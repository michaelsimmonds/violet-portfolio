<template>
  <div>
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./components/Nav/Nav.vue";
import { detectMouse } from "./utils";

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
