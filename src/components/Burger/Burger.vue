<template>
  <!-- <div class="burger" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle">
    <slot>
      <button type="button" class="burger__button" title="Menu">
        <span class="hidden">Toggle menu</span>
        <span class="burger__bar burger__bar--1"></span>
        <span class="burger__bar burger__bar--2"></span>
        <span class="burger__bar burger__bar--3"></span>
      </button>
    </slot>
  </div>-->
  <div class="hamburger-menu">
    <input type="checkbox" />
    <span />
    <span />
    <span />
  </div>
</template>
<script>
import { store, mutations } from "../../store.js";

export default {};
</script>

<style lang="scss" >
@import "./Burger.scss";
</style>
