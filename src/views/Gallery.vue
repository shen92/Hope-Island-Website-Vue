<template>
  <div class="gallery">
  <div class="mainContent">
    This is Gallery
  </div>
    <Footer/>
  </div>
</template>

<script>
import { Footer } from '@/components'

export default {
  name: 'Gallery',
  components: {
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
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>