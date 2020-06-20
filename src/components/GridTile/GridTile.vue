<template>
  <div class="grid-tile">
    <div class="grid-tile__height-setter"></div>
    <figure class="grid-tile__image-wrapper">
      <img :alt="image.alt" :src="getSrc" class="grid-tile__image" />
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
