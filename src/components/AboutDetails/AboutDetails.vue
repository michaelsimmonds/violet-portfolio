<template>
  <div class="about-details">
    <div class="about-details__section about-details__section--2">
      <div class="about-details__text-wrapper">
        <p class="about-details__copy about-details__copy--1">
          Violet Iola Argent is a London based illustrator and artist whose work combines
          vivid colours and free flowing lines. Her work is a contemplation of the aesthetics
          of portraiture which question how one can best express the identity of a person. A
          strong understanding of colour theory has ensured that Violet's work remains
          expressive and instinctive, weaving a visual dialogue between emotion, identity and
          the human figure.
        </p>

        <p class="about-details__copy about-details__copy--2">
          After graduating with a Distinction in Masters Illustration from Camberwell
          College of Arts, Violet has gone on to complete commissions for both personal art
          collections and publications.
        </p>
      </div>
    </div>
    <div class="about-details__section about-details__section--1">
      <figure class="about-details__image-wrapper">
        <img class="about-details__image" src="static/images/cutoff2.jpeg" alt />
      </figure>
    </div>
    <div class="about-details__overlay"></div>
  </div>
</template>

<script>
export default {
  name: "AboutDetails",
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
@import "./AboutDetails.scss";
</style>
