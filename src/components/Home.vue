<template>
  <div class="container pos-relative">
    <Burger />
    <Grid />
    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <!-- <router-link to="/contact"></router-link> -->
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import Grid from "./Grid/Grid.vue";
import Burger from "./Burger/Burger.vue";
import Sidebar from "./Sidebar/Sidebar.vue";

export default {
  name: "Home",
  components: {
    Grid,
    Burger,
    Sidebar
  }
};
</script>
