<template>
  <div class="grid" v-animate="'trigger'">
    <CoolLightBox
      :items="getImageSrcs"
      :index="index"
      :disableZoom="true"
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
      :class="image.featured"
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
          src: "1.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 2,
          src: "2.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 3,
          src: "3.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 4,
          src: "5.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 5,
          src: "4.jpeg",
          alt: "portrait illustration",
          featured: "grid__tile--featured--1"
        },
        {
          id: 6,
          src: "8.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 7,
          src: "7.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 8,
          src: "15.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 9,
          src: "9.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 10,
          src: "10.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 11,
          src: "11.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 12,
          src: "12.jpeg",
          alt: "portrait illustration",
          featured: "grid__tile--featured--2"
        },
        {
          id: 13,
          src: "13.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 14,
          src: "14.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 15,
          src: "black2.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 16,
          src: "black1.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 17,
          src: "6.jpeg",
          alt: "portrait illustration",
          featured: "grid__tile--featured--3"
        },
        {
          id: 18,
          src: "black3.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 19,
          src: "sketch1.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 20,
          src: "sketch2.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 21,
          src: "sketch3.jpeg",
          alt: "portrait illustration"
        }
        // {
        //   id: 22,
        //   src: "favicon.jpeg",
        //   alt: "portrait illustration"
        // }
        // {
        //   id: 24,
        //   src: "24.jpeg",
        //   alt: "portrait illustration"
        // }
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
