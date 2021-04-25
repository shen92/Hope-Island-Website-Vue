<template>
  <div class="about">
    <div class="mainContent">
      
    </div>
    <Footer/>
  </div>
</template>

<script>
import { Footer } from '@/components'

export default {
  name: 'About',
  components: {
    Footer
  },
}
</script>

<style lang="scss" scoped>
  .about {
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