<template>
  <div class="team">
    <div class="mainContent">
      This is Team
    </div>
    <Footer/>
  </div>
</template>

<script>
import { Footer } from '@/components'

export default {
  name: 'Team',
  components: {
    Footer
  },
}
</script>

<style lang="scss" scoped>
  .team {
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