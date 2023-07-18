<template>
  <div class="grid-tile" v-animate="'slideUpFade'">
    <div class="grid-tile__height-setter"></div>
    <div class="grid-tile__overlay"></div>
    <figure class="grid-tile__image-wrapper">
      <img :alt="image.alt || 'illustration'" :src="image.src" :data-src="image.src" class="grid-tile__image lazyload" />
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
};
</script>

<style lang="scss" >
@import "./GridTile.scss";
</style>
