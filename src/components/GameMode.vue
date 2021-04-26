<template>
  <div class="gameMode">
    <div class="descriptionsContainer">
      <div class="descriptionContainer">
        <div class="title descriptionTitle">Choose or upgrade Skill</div>
        <div class="content descriptionContent">
          In the beginning of each level, the player needs to choose or upgrade the skills the player currently have.
        </div>
      </div>
      <div class="descriptionContainer"></div>
      <div class="descriptionContainer">
        <div class="title descriptionTitle">Beat boss of the level</div>
        <div class="content descriptionContent">
          To complete each level, the player must beat the boss, which is the strongest enemies in each level.
        </div>
      </div>
      <div class="descriptionContainer"></div>
    </div>
    <div class="progressContainer">
      <div class="line"></div>
      <div class="dotsContainer">
        <div class="progressLine"></div>
        <div class="dotContainer">
          <div class="dot"></div>
        </div>
        <div class="dotContainer">
          <div class="dot"></div>
        </div>
        <div class="dotContainer">
          <div class="dot"></div>
        </div>
        <div class="dotContainer">
          <div class="dot"></div>
        </div>
      </div>
    </div>
    <div class="descriptionsContainer">
      <div class="descriptionContainer"></div>
      <div class="descriptionContainer">
        <div class="title descriptionTitle">Complete basic scenes</div>
        <div class="content descriptionContent">
          There are 3 basic scenes in each level connected with each other in a random order.
        </div>
      </div>
      <div class="descriptionContainer"></div>
      <div class="descriptionContainer">
        <div class="title descriptionTitle">Go to next level</div>
        <div class="content descriptionContent">
          The player can move to the next level and get closer to the victory of the game.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameMode'
}
</script>

<style lang="scss" scoped>
  .gameMode {
    height: 100vh;
    background: #FFA69E;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4vh;
    padding: 0px 10%;
    text-align: center;
  }

  .progressContainer {
    width: 100%;
  }

  .dotsContainer {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .descriptionsContainer {
    width: 100%;
    display: flex;
  }

  .descriptionContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3vh
  }

  .descriptionTitle {
    font-size: 24px;
  }

  .descriptionContent {
    font-size: 20px;
  }

  .line {
    width: 100%;
    height: 12px;
    border-radius: 12px;
    background: white;
    position: relative;
    transform: translateY(225%);
  }

  .dotContainer {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .dot {
    background: white;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    transform: scale(1.0);
    transition: transform 0.15s ease-in-out;
  }

  .dot:hover {
    transform: scale(1.35);
    transition: transform 0.15s ease-in-out;
  }
</style>