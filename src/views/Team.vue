<template>
  <div class="team">
    <Developer/>
    <Footer/>
  </div>
</template>

<script>
import { Developer, Footer } from '@/components'

export default {
  name: 'Team',
  components: {
    Developer,
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
</style>