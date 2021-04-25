<template>
  <div class="inspirations">
    <div class="imagesContainer">
      <div class="imageContainer" style="background-image: url('/images/similar/other1.jpg')">
      </div>
      <div class="imageContainer" style="background-image: url('/images/similar/other2.jpg')">
      </div>
      <div class="imageContainer" style="background-image: url('/images/similar/other3.jpg')">
      </div>
      <div class="imageContainer" style="background-image: url('/images/similar/other4.jpg')">
      </div>
      <div class="imageContainer" style="background-image: url('/images/similar/other5.jpg')">
      </div>
      <div class="imageContainer" style="background-image: url('/images/similar/other6.jpg')">
      </div>
    </div>
    <div class="inspirationsContentContainer">
      <div class="content inspirationsContent textLight">
        The gameplay system design is inspired from a series of popular rouge-like games such as:
      </div>
      <div class="imagesContainer" style="gap: 4vw">
        <img src="/images/logo/hades.png" height="100">
        <img src="/images/logo/isaac.png" height="70">
        <img src="/images/logo/crown.png" height="100">
      </div>
      <div class="content inspirationsContent textLight" style="margin-top: 2vh">
        Hope Island is in the theme of fantasy and set in a medieval, background, inspired from a series of 3D open-world adventure games such as:
      </div>
      <div class="imagesContainer" style="gap: 4vw">
        <img src="/images/logo/rdr2.png" height="80">
        <img src="/images/logo/witcher3.png" height="80">
        <img src="/images/logo/elderScrolls.png" height="80">
      </div>
    </div>
    <div class="imagesContainer">
      <div class="imageContainer" style="background-image: url('/images/similar/other7.jpg')">
      </div>
      <div class="imageContainer" style="background-image: url('/images/similar/other8.jpg')">
      </div>
      <div class="imageContainer" style="background-image: url('/images/similar/other9.jpg')">
      </div>
      <div class="imageContainer" style="background-image: url('/images/similar/other10.jpg')">
      </div>
      <div class="imageContainer" style="background-image: url('/images/similar/other11.jpg')">
      </div>
      <div class="imageContainer" style="background-image: url('/images/similar/other12.jpg')">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .inspirations {
    height: 100vh;
    width: 100%;
    background: #5E6472;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .imagesContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imageContainer {
    flex: 1;
    height: 15vh;
    background-size: cover;
  }

  .inspirationsContentContainer {
    padding: 0px 10%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4vh
  }

  .inspirationsContent {
    font-size: 20px;
  }

</style>