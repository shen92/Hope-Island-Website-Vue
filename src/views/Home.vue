<template>
  <div class="home">
    <Landing/>
    <VideoPlayer src="https://www.youtube.com/embed/72nYak1xM4Y?controls=0"/>
    <Section backgroundPath="/images/scenes/level0.jpg" :isReversed="false">
      <div class="slotContentContainer features">
        <div class="slotContent">
          <div class="title cardTitle">Features</div>
          <div>
            <div class="content cardContent">Rougelike RPG</div>
            <div class="content cardContent">Random skill upgrades</div>
            <div class="content cardContent">Random Maps</div>
            <div class="content cardContent">Random Pickups</div>
          </div>
          <NavButton path="/about"/>
        </div>
      </div>
    </Section>
    <Section backgroundPath="/images/scenes/level1-3.jpg" :isReversed="true">
      <div class="slotContentContainer story">
        <div class="slotContent">
          <div class="title cardTitle">Story</div>
          <div class="content cardContent" style="width: 25vw">
            Estian Year 1099, Matard invaded Hope Island. 
            <br><br>
            As the chosen warriors, Vincent, Marc and Charlotte must start the journey to escape Hope Island immediately to release the ancient magic to save Hope Island.
          </div>
          <NavButton path="/about"/>
        </div>
      </div>
    </Section>
    <Section backgroundPath="/images/scenes/level2b.jpg" :isReversed="false">
      <div class="slotContentContainer developers">
        <div class="slotContent">
          <div class="title cardTitle">Developers</div>
          <div style="width: 25vw">
            <div class="content cardContent" >
              BuggyPunk, from 
            </div>
            <div class="content cardContent" style="margin-top: 4vh">
              USC CSCI526
            </div>
            <div class="content cardContent" >
              Advanced Mobile Devices and Games
            </div>
            <div class="content cardContent" >
              Spring 2021
            </div>
          </div>
          <NavButton path="/team"/>
        </div>
      </div>
    </Section>
    <Section backgroundPath="/images/scenes/level3-2.jpg" :isReversed="true">
      <div class="slotContentContainer release">
        <div class="slotContent">
          <div>
            <div class="title cardTitle">Latest Release</div>
            <div class="content cardContent" >
                Hope Island (v1.0 2021.04.28)
            </div>
          </div>
          <div class="logoContainer">
            <img src="/images/logo/appStore.png" height="50px">
            <img src="/images/logo/googlePlay.png" height="70px" style="margin-left: 2vw">
          </div>
        </div>
      </div>
    </Section>
    <Footer/>
  </div>
</template>

<script>
import { Landing, VideoPlayer, Section, NavButton, Footer } from '@/components'

export default {
  name: 'Home',
  components: {
    Landing,
    VideoPlayer,
    Section,
    NavButton,
    Footer
  },
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
  }

  .slotContentContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .slotContent {
    margin-left: 20%;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 8vh;
  }

  .cardTitle {
    font-size: 40px;
  }

  .cardContent {
    font-size: 20px;
    display: flex;
  }

  .logoContainer {
    display: flex;
    align-items: center;
  }

  .features {
    background: transparent linear-gradient(0deg, #B8F2E6 0%, #FFA69E 100%) 0% 0% no-repeat padding-box;
  }

  .story {
    background: transparent linear-gradient(0deg, #FAF3DD 0%, #B8F2E6 100%) 0% 0% no-repeat padding-box;
  }

  .developers {
    background: transparent linear-gradient(0deg, #AED9E0 0%, #FAF3DD 100%) 0% 0% no-repeat padding-box;
  }

  .release {
    background: transparent linear-gradient(180deg, #AED9E0 0%, #FFA69E 100%) 0% 0% no-repeat padding-box;
  }
</style>
