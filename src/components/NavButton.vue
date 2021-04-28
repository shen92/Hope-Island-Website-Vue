<template>
  <router-link :to="this.$props.path" style="text-decoration: none; color: inherit;">
    <div class="button title">
      Read More
    </div>
  </router-link>
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
