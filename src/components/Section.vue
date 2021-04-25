<template>
  <div class="background" :style="{backgroundImage:`url('${backgroundPath}')`, justifyContent: isReversed ? 'flex-end' : 'flex-start'}">
    <div class="card">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundPath: String,
    isReversed: Boolean
  },
}
</script>

<style lang="scss">
  .background {
    height: calc(100% - 60px);
    background-size: cover;
    display: flex;
  }

  .card {
    width: 40%;
  }
</style>