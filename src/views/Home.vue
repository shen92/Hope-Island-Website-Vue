<template>
  <div class="home">
    <Landing/>
    <div>Footer</div>
  </div>
</template>

<script>
import { Landing } from '@/components'

export default {
  name: 'Home',
  components: {
    Landing
  },
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;;
  }
</style>
