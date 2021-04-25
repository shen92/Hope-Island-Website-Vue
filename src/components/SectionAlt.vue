<template>
  <div class="background" :style="{backgroundImage:`url('${backgroundPath}')`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    backgroundPath: String,
  },
}
</script>

<style lang="scss">
  .background {
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>