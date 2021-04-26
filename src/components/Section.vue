<template>
  <div class="background" :style="{backgroundImage:`url('${backgroundPath}')`, justifyContent: isReversed ? 'flex-end' : 'flex-start'}">
    <div class="card">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    backgroundPath: String,
    isReversed: Boolean
  },
}
</script>

<style lang="scss">
  .background {
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
  }

  .card {
    height: 100%;
    width: 40%;
  }
</style>