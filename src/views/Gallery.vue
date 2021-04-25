<template>
  <div class="gallery">
  <div class="mainContent">
    <Carousel/>
  </div>
    <Footer/>
  </div>
</template>

<script>
import { Carousel, Footer } from '@/components'

export default {
  name: 'Gallery',
  components: {
    Carousel,
    Footer
  },
}
</script>

<style lang="scss" scoped>
  .gallery {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .mainContent {
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>