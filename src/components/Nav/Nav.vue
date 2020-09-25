<template>
  <div class="nav" :class="{ 'nav--open': !navOpen}">
    <div class="nav__wrapper">
      <div class="nav__home-wrapper">
        <router-link to="/" class="nav__list-link" @click.native="checkScrollLock">Violet Argent</router-link>
      </div>
      <div class="nav__burger-wrapper">
        <Burger @click.native="toggleNav" :checked="navOpen" />
      </div>
    </div>
    <transition name="nav-slide">
      <div v-if="navOpen" class="nav__panel">
        <ul class="nav__list">
          <li class="nav__list-item">
            <router-link
              to="/gallery"
              class="nav__list-link"
              @click.native="checkScrollLock"
            >Gallery</router-link>
          </li>
          <li class="nav__list-item">
            <router-link to="/about" class="nav__list-link" @click.native="checkScrollLock">About</router-link>
          </li>
          <li class="nav__list-item">
            <router-link
              to="/contact"
              class="nav__list-link"
              @click.native="checkScrollLock"
            >Contact</router-link>
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
      this.navOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    },
    checkScrollLock: function() {
      if ((document.body.style.overflow = "hidden"))
        document.body.style.overflow = "auto";
    }
  }
};
</script>

<style lang="scss" >
@import "./Nav.scss";
</style>
