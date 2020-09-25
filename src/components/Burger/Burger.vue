<template>
  <div class="hamburger-menu" :class="{ 'checked': checked}">
    <div class="hamburger-menu__wrapper">
      <span class="hamburger-menu__span hamburger-menu__span--1" />
      <span class="hamburger-menu__span hamburger-menu__span--2" />
      <span class="hamburger-menu__span hamburger-menu__span--3" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    checked: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>

<style lang="scss" >
@import "./Burger.scss";
</style>
