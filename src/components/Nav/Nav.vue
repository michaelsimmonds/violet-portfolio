<template>
  <div class="nav">
    <div class="nav__wrapper">
      <div class="nav__burger-wrapper" @click="toggleNav">
        <Burger />
      </div>
    </div>
    <!-- <transition name="nav-slide"> -->
    <div v-if="navOpen" class="nav__panel">
      <div class="nav__list-wrapper">
        <ul class="nav__list">
          <li class="nav__list-item">
            <router-link to="/" class="nav__list-link">Gallery</router-link>
          </li>
          <li class="nav__list-item">
            <router-link to="/about" class="nav__list-link">About</router-link>
          </li>
          <li class="nav__list-item">
            <router-link to="/contact" class="nav__list-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- </transition> -->
  </div>
</template>
<script>
// import { store, mutations } from "../../store.js";
import Burger from "../Burger/Burger.vue";

export default {
  name: "Nav",
  components: {
    Burger
  },
  data() {
    return {
      navOpen: false
    };
  },
  methods: {
    toggleNav: function() {
      console.log("here");
      // if (!this.navOpen) this.navOpen = true;
      this.navOpen = !this.navOpen;
    }
  }
};
</script>

<style lang="scss" >
@import "./Nav.scss";
</style>
