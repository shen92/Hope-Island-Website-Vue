<template>
  <div class="home">
    <Landing/>
    <!-- <div class="section">
      <img class="sectionImage" src="@/assets/img/scenes/level0.png">
    </div>
    <div class="section">
      <img class="sectionImage" src="@/assets/img/scenes/level1-3.png">
    </div>
    <div class="section">
      <img class="sectionImage" src="@/assets/img/scenes/level2b.png">
    </div>
    <div class="section">
      <img class="sectionImage" src="@/assets/img/scenes/level3-2.png">
    </div> -->
    
    <Footer/>
  </div>
</template>

<script>
import { Landing, Footer } from '@/components'

export default {
  name: 'Home',
  components: {
    Landing,
    Footer
  },
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
  }
  .sectionImage {
    width: 100%;
    object-fit: contain;
  }
</style>
