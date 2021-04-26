<template>
  <div class="developer" :style="{flexDirection: this.$props.isReversed ? 'row' : 'row-reverse'}">
    <div class="descriptionContainer">
      <slot></slot>
    </div>
    <div class="avatarContainer">
      <div class="avatar" :style="{backgroundImage:`url('${avatarPath}')`}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Developer',
  props: {
    isReversed: Boolean,
    avatarPath: String
  }
}
</script>

<style lang="scss" scoped>
  .developer {
    margin: auto;
    padding: 1vh 1vw;
    width: 75%;
    height: 50vh;
    display: flex;
    transition:  box-shadow .25s ease-out;
    box-shadow: 8px 8px 16px #e0e0e0, -8px -8px 16px #ffffff;
    border-radius: 10px;
  }

  .developer:hover{ 
    box-shadow: 8px 8px 16px #bababa, -8px -8px 16px #ffffff;
    transition:  box-shadow .25s ease-in;
  }

  .avatarContainer {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .avatar {
    height: 100%;
    width: 80%;
    background-size: contain;
    background-position: center;
  }

  .descriptionContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>