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

<script>
export default {
  name: 'NavButton'
}
</script>

<style scoped>
  .button {
    width: fit-content;
    border: 1px solid black;
    padding: 10px 20px;
    cursor: pointer;
    user-select: none;
    color: black;
    background: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  }

  .button:hover {
    color: white;
    background: black;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  }
</style>
