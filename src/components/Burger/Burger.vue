<template>
  <div class="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">
    <slot>
      <button type="button" class="burger__button" title="Menu">
        <span class="hidden">Toggle menu</span>
        <span class="burger__bar burger__bar--1"></span>
        <span class="burger__bar burger__bar--2"></span>
        <span class="burger__bar burger__bar--3"></span>
      </button>
    </slot>
  </div>
</template>
<script>
import { store, mutations } from "../../store.js";

export default {
  computed: {
    isBurgerActive() {
      return store.isNavOpen;
    }
  },
  methods: {
    toggle() {
      mutations.toggleNav();
    }
  }
};
</script>
<style lang="scss" >
@import "./Burger.scss";
</style>
