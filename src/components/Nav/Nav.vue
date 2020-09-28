<template>
  <div class="nav" :class="{ 'nav--open': navOpen}">
    <div class="nav__wrapper">
      <div class="nav__home-wrapper">
        <span
          tabindex="0"
          class="nav__list-link nav__list-link--home"
          @click="checkRoute(homeLink.path)"
        >{{homeLink.title}}</span>
      </div>
      <div class="nav__burger-wrapper">
        <Burger @click.native="toggleNav" :checked="navOpen" />
      </div>
    </div>
    <transition name="nav-slide">
      <div v-if="navOpen" class="nav__panel">
        <ul class="nav__list">
          <li
            v-for="(link, index) in pageLinks"
            :key="index"
            class="nav__list-item"
            :class="{'active': path === link.path}"
            @click="checkRoute(link.path)"
            tabindex="0"
          >
            <span class="nav__list-link">{{link.title}}</span>
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
      navOpen: false,
      homeLink: {
        path: "/",
        title: "Violet Argent"
      },
      pageLinks: [
        {
          path: "/gallery",
          title: "Gallery"
        },
        {
          path: "/about",
          title: "About"
        },
        {
          path: "/contact",
          title: "Contact"
        }
      ]
    };
  },
  computed: {
    path() {
      return this.$route.path;
    }
  },
  methods: {
    toggleNav: function() {
      this.navOpen = !this.navOpen;
      this.navOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    },
    checkRoute(path) {
      if (this.$route.path === path && this.navOpen) {
        this.toggleNav();
      } else if (path === "/" && !this.navOpen && this.$route.path != path) {
        this.$router.push(path);
      } else if (path === "/" && !this.navOpen && this.$route.path === path) {
        return;
      } else {
        this.$router.push(path);
        this.toggleNav();
      }
    }
  }
};
</script>

<style lang="scss" >
@import "./Nav.scss";
</style>
