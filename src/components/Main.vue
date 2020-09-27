<template>
  <div>
    <router-view></router-view>
    <p>
      <router-link to="/"></router-link>
      <router-link to="/contact"></router-link>
      <router-link to="/about"></router-link>
      <router-link to="/gallery"></router-link>
    </p>
  </div>
</template>

<script>
import { detectMouse } from "../assets/utilities";

export default {
  name: "Main",
  mounted() {
    detectMouse();
  }
};
</script>
