<template>
    <v-carousel cycle  hide-delimiter-background
    show-arrows-on-hover height="150">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"     
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://i.picsum.photos/id/76/1800/500.jpg',
          },
          {
            src: 'https://i.picsum.photos/id/72/1800/500.jpg',
          },
          {
            src: 'https://i.picsum.photos/id/70/1800/500.jpg',
          },
          {
            src: 'https://i.picsum.photos/id/71/1800/500.jpg',
          },
        ],
      }
    },
  }
</script>
