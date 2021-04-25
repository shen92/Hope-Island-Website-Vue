<template>
  <div class="button title" @click="onButtonClick()">
      Read More
  </div>
</template>

<script>
export default {
  name: "NavButton",
  props: {
      path: {
        type: String,
        required: true,
      }
  },
  methods: {
  onButtonClick () {
     this.$router.push(
        {
          path: this.$props.path,
        }
     )
    },
  }
}
</script>

<style scoped>
  .button {
    border: 1px solid black;
    padding: 10px 20px;
    cursor: pointer;
    user-select: none;
  }

  .button:hover {
    color: white;
    background: black;
  }
</style>
