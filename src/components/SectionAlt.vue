<template>
  <div class="background" :style="{backgroundImage:`url('${backgroundPath}')`}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SectionAlt',
  props: {
    backgroundPath: String,
  },
}
</script>

<style scoped lang="scss">
  .background {
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>