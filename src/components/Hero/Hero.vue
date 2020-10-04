<template>
  <div class="hero">
    <div class="hero__image-wrapper">
      <img src="static/images/sketch1.jpeg" class="hero__image" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  mounted() {
    this.checkVh();
    window.addEventListener("resize", this.checkVh);
  },
  methods: {
    checkVh() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
  }
};
</script>

<style lang="scss" >
@import "./Hero.scss";
</style>
