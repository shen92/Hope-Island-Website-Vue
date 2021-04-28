<template>
  <div class="videoPlayer">
    <iframe width="100%" height="100%" :src="this.$props.src"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    src: String
  }
}
</script>

<style lang="scss" scoped>
  .videoPlayer {
    width: 100%;
    height: 100vh;
  }
</style>