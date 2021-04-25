<template>
  <div class="home">
    <Landing/>
    <Section backgroundPath="/images/scenes/level0.png"/>
    <Footer/>
  </div>
</template>

<script>
import { Landing, Section, Footer } from '@/components'

export default {
  name: 'Home',
  components: {
    Landing,
    Section,
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
