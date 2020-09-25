<template>
  <div class="nav" :class="{ 'nav--open': !navOpen}">
    <div class="nav__wrapper">
      <div class="nav__home-wrapper">
        <router-link to="/" class="nav__list-link">Violet Argent</router-link>
      </div>
      <div class="nav__burger-wrapper" @click="toggleNav">
        <Burger />
      </div>
    </div>
    <transition name="nav-slide">
      <div v-if="navOpen" class="nav__panel">
        <ul class="nav__list">
          <li class="nav__list-item">
            <router-link to="/gallery" class="nav__list-link">Gallery</router-link>
          </li>
          <li class="nav__list-item">
            <router-link to="/about" class="nav__list-link">About</router-link>
          </li>
          <li class="nav__list-item">
            <router-link to="/contact" class="nav__list-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
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
      this.navOpen = !this.navOpen;
    }
  }
};
</script>

<style lang="scss" >
@import "./Nav.scss";
</style>
