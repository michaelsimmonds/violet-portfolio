<template>
  <div class="grid" v-animate="'trigger'">
    <CoolLightBox
      :items="getImageSrcs"
      :index="index"
      loop
      @close="index = null"
      :effect="'fade'"
      :slideshow="false"
      :gallery="false"
    ></CoolLightBox>

    <div
      v-for="(image, index) in images"
      :key="index"
      class="grid__tile"
      @click="setIndex(index)"
      :class="{ 'grid__tile--featured': image.featured}"
    >
      <GridTile :image="image" />
    </div>
  </div>
</template>

<script>
import GridTile from "../GridTile/GridTile.vue";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  name: "Grid",
  components: {
    GridTile,
    CoolLightBox
  },
  data() {
    return {
      images: [
        {
          id: 1,
          src: "1.jpg",
          alt: "mart"
        },
        {
          id: 2,
          src: "2.jpg",
          alt: "mart"
        },
        {
          id: 3,
          src: "3.jpg",
          alt: "mart"
        },
        {
          id: 4,
          src: "4.jpg",
          alt: "mart"
        },
        {
          id: 5,
          src: "5.jpg",
          alt: "mart",
          featured: true
        },
        {
          id: 6,
          src: "6.jpg",
          alt: "mart"
        },
        {
          id: 7,
          src: "1.jpg",
          alt: "mart"
        },
        {
          id: 8,
          src: "2.jpg",
          alt: "mart"
        },
        {
          id: 9,
          src: "3.jpg",
          alt: "mart"
        },
        {
          id: 10,
          src: "4.jpg",
          alt: "mart"
        },
        {
          id: 11,
          src: "5.jpg",
          alt: "mart"
        },
        {
          id: 12,
          src: "6.jpg",
          alt: "mart"
        },
        {
          id: 13,
          src: "1.jpg",
          alt: "mart"
        }
      ],
      index: null
    };
  },
  methods: {
    setIndex(index) {
      this.index = index;
    }
  },
  computed: {
    getImageSrcs() {
      let srcArray;
      srcArray = this.images.map(imageObject => {
        let path = "static/images/" + imageObject.src;
        return {
          src: path
        };
      });
      return srcArray;
    }
  }
};
</script>

<style lang="scss" >
@import "./Grid.scss";
</style>
