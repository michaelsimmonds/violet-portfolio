<template>
  <div class="grid-tile" v-animate="'slideUpFade'">
    <div class="grid-tile__height-setter"></div>
    <div class="grid-tile__overlay"></div>
    <figure class="grid-tile__image-wrapper">
      <img :alt="image.alt" :src="getSrc" :data-src="getSrc" class="grid-tile__image lazyload" />
    </figure>
  </div>
</template>

<script>
export default {
  name: "GridTile",
  props: {
    image: {
      type: Object,
      required: true,
      default() {
        return [
          {
            id: undefined,
            src: "",
            alt: "",
            featured: false
          }
        ];
      }
    }
  },
  computed: {
    getSrc: function() {
      return "static/images/" + this.image.src;
    }
  }
};
</script>

<style lang="scss" >
@import "./GridTile.scss";
</style>
