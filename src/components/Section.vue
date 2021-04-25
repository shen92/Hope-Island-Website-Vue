<template>
  <div>
    <div :style="{backgroundImage:`url('${backgroundPath}')`}" style="height: 960px"></div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundPath: String
  },
}
</script>