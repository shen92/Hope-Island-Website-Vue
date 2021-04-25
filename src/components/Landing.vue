<template>
  <div class="landing">
    <div class="leftColumn">
      <div>
        <div class="gameTitle" style="font-size: 90px;">Hope Island</div>
        <div class="title" style="font-size: 30px">BuggyPunk Presents</div>
        <div class="subTitle" style="font-size: 24px; margin: 20% 0px 5%;">You are the chosen warrior.</div>
        <NavButton path="about"/>
      </div>
    </div>
    <div class="rightColumn">
      <div class="imageContainer">
        <img class="illustrate" src="/images/illustrate/castle.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  components: {
    NavButton: () => import('./NavButton')
  },
}
</script>

<style lang="scss" scoped>
  .landing {
    height: 100%;
    background: transparent linear-gradient(180deg, #AED9E0 0%, #FAF3DD 100%) 0% 0% no-repeat padding-box;
    display: flex;
  }

  .leftColumn {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .leftColumn div {
    width: fit-content;
  }

  .rightColumn {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .imageContainer {
    width: fit-content;
  }

  .illustrate {
    height: 100%;
    width: auto;
  }
</style>