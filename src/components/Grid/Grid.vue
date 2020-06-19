<template>
  <div class="grid">
    <div v-for="(image, index) in images" :key="index">
      <GridTile :image="image" />
    </div>
  </div>
</template>

<script>
import GridTile from '../GridTile/GridTile.vue'

export default {
  name: 'Grid',
  components: {
    GridTile
  },
  data() {
    return {
      images: [
        {
          id: 1,
          src: '1.jpg',
          alt: 'mart'
        },
        {
          id: 2,
          src: '2.jpg',
          alt: 'mart'
        },
        {
          id: 3,
          src: '3.jpg',
          alt: 'mart'
        },
        {
          id: 4,
          src: '4.jpg',
          alt: 'mart'
        },
        {
          id: 5,
          src: '5.jpg',
          alt: 'mart'
        },
        {
          id: 6,
          src: '6.jpg',
          alt: 'mart'
        },
        {
          id: 7,
          src: '1.jpg',
          alt: 'mart'
        },
        {
          id: 8,
          src: '2.jpg',
          alt: 'mart'
        },
        {
          id: 9,
          src: '3.jpg',
          alt: 'mart'
        },
        {
          id: 10,
          src: '4.jpg',
          alt: 'mart'
        },
        {
          id: 11,
          src: '5.jpg',
          alt: 'mart'
        },
        {
          id: 12,
          src: '6.jpg',
          alt: 'mart'
        }
      ]
    }
  }
}
</script>
