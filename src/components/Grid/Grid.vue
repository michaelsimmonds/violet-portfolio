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
                }
            ]
        }
    }
}
</script>