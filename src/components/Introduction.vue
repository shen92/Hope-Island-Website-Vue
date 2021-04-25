<template>
  <div class="introduction">
    <div class="content introductionContentText">
      Hope Island is a 2.5D, third-person, single-player, rouge-like, role-playing game (RPG).
    </div>
    <div class="featuresContainer">
      <div class="featureContainer">
        <i class="far fa-map featureIcon"></i>
        <div class="title featureTitle">Random Maps</div>
        <div class="content featureContentText">
          Explore different areas and landmarks on Hope Island
        </div>
      </div>
      <div class="featureContainer">
        <i class="far fa-users featureIcon"></i>
        <div class="title featureTitle">Multiple Characters</div>
        <div class="content featureContentText">
          Choose your favorite character to start the adventure on Hope Island
        </div>
      </div>
      <div class="featureContainer">
        <i class="far fa-fire featureIcon"></i>
        <div class="title featureTitle">Random Skills</div>
        <div class="content featureContentText">
          Choose or upgrade your skills to beat the new enemies on upcoming levels
        </div>
      </div>
    </div>
    <div class="content introductionContentText">
      Choose the player character you like, try different combinations of characters and skills, and experience different terrains and environments on Hope Island!
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .introduction {
    height: 100vh;
    background: #FAF3DD 0% 0% no-repeat padding-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10vh;
    padding: 0px 10%;
    text-align: center;
  }

  .introductionContentText {
    font-size: 20px;
  }

  .featuresContainer {
    display: flex;
    align-items: top;
    gap: 6vw
  }

  .featureContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vh
  }

  .featureIcon {
    font-size: 60px;
  }

  .featureTitle {
    font-size: 30px;
  }

  .featureContentText {
    font-size: 20px;
    width: 20vw;
  }
</style>