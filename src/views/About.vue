<template>
  <div class="about">
    <SectionAlt backgroundPath="/images/scenes/level3b.png">
      <div class="title heroTitle textLight">Welcome to Hope Island</div>
    </SectionAlt>
    <Introduction/>
    <SectionAlt backgroundPath="/images/scenes/level2-2.png">
      <div style="display: flex; flex-direction: column; align-items: center">
        <div class="title heroTitle textLight">Design and Inspirations</div>
        <div class="title heroSubTitle textLight" style="margin-top: 2vh">Read More on <span class="link">Game Design Document</span></div>
      </div>
    </SectionAlt>
    <SectionAlt backgroundPath="/images/scenes/level1b.png">
      <div class="title heroTitle textLight">Gameplay and Mode</div>
    </SectionAlt>
    <SectionAlt backgroundPath="/images/characters/charlottel1.png">
      <div class="title heroTitle textLight">Characters and Skills</div>
    </SectionAlt>
    <SectionAlt backgroundPath="/images/scenes/level1-2.png">
      <div class="title heroTitle textLight">Maps and Levels</div>
    </SectionAlt>
    <Section backgroundPath="/images/scenes/level0.png" :isReversed="false">
      <div class="slotContentContainer map">
        <div class="slotContent">
          <div>
            <div class="title cardTitle">Walnut Town</div>
            <div class="subtitle cardSubTitle">Where adventure begins</div>
          </div>
          <div style="width: 25vw">
            <div class="content cardContent" >
              It is a beautiful and quiet town in the heart of Wild Timberland. It is also the safe-house of Vincent, Marc and Charlotte.
            </div>
          </div>
        </div>
      </div>
    </Section>
    <Section backgroundPath="/images/scenes/level1-4.png" :isReversed="true">
      <div class="slotContentContainer map">
        <div class="slotContent">
          <div>
            <div class="title cardTitle">Wild Timberland</div>
            <div class="subtitle cardSubTitle">Peaceful but dangerous</div>
          </div>
          <div style="width: 25vw">
            <div class="content cardContent" >
              Wild Timberland possesses the wildest the most ancient forest on hope island. This area owns an amazing landscape with forest, valleys, rivers and lakes. There also exists lots of danger
            </div>
          </div>
        </div>
      </div>
    </Section>
    <Section backgroundPath="/images/scenes/level2-1.png" :isReversed="false">
      <div class="slotContentContainer map">
        <div class="slotContent">
          <div>
            <div class="title cardTitle">Barren Desert</div>
            <div class="subtitle cardSubTitle">Hot, dry and mysterious</div>
          </div>
          <div style="width: 25vw">
            <div class="content cardContent" >
              The Barren Desert is the hottest and driest place on Hope Island. In the Barren Desert, there are villages, oases and ancient relics. Also, there are lots of danger.
            </div>
          </div>
        </div>
      </div>
    </Section>
    <Section backgroundPath="/images/scenes/level3-1.png" :isReversed="true">
      <div class="slotContentContainer map">
        <div class="slotContent">
          <div>
            <div class="title cardTitle">Harbor Town</div>
            <div class="subtitle cardSubTitle">Harbor Town</div>
          </div>
          <div style="width: 25vw">
            <div class="content cardContent" >
              Harbor Town is the most important town on Hope Island. It used to be busy and prosperous, but now it has been occupied by the Matard Soldiers.
            </div>
          </div>
        </div>
      </div>
    </Section>
    <Footer/>
  </div>
</template>

<script>
import { Section, SectionAlt, Introduction, Footer } from '@/components'

export default {
  name: 'About',
  components: {
    Footer,
    Section,
    SectionAlt,
    Introduction
  },
}
</script>

<style lang="scss" scoped>
  .about {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .heroTitle {
    font-size: 60px;
  }

  .heroSubTitle {
    font-size: 32px;
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

  .cardSubTitle {
    font-size: 20px;
  }

  .cardContent {
    font-size: 20px;
    display: flex;
  }

  .map {
    background: #FAF3DD 0% 0% no-repeat padding-box;
  }

</style>