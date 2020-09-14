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
          featured: true
        },
        {
          id: 6,
          src: "6.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 7,
          src: "7.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 8,
          src: "8.jpeg",
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
          alt: "portrait illustration"
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
          src: "15.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 16,
          src: "16.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 17,
          src: "17.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 18,
          src: "18.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 19,
          src: "19.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 20,
          src: "20.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 21,
          src: "21.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 22,
          src: "22.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 23,
          src: "23.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 24,
          src: "24.jpeg",
          alt: "portrait illustration"
        },
        {
          id: 25,
          src: "25.jpeg",
          alt: "portrait illustration"
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
