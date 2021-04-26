<template>
  <div class="team">
    <div style="height: 60px"></div>
    <div class="mainContent">
      <Developer :isReversed="false" avatarPath="/images/avatars/yingjie.jpg">
        <div class="personalInfo">
          <div class="title">
            Yingjie Shen 
            <a href="https://www.linkedin.com/in/yingjie-shen-a814a916b/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="subtitle">
            Level Designer / Engineer
            <br>
            UI Designer
            <br>
            Gameplay Designer
            <br>
            Web Developer
          </div>
        </div>
      </Developer>
      <Developer :isReversed="true" avatarPath="/images/avatars/yunxuan.jpg">
        <div class="personalInfo">
          <div class="title">
            Yunxuan Cai 
            <a href="https://www.linkedin.com/in/yunxuan-cai/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
            </div>
          <div class="subtitle">
            Character Designer (Player) 
            <br>
            Character Engineer (Player) 
            <br>
            Technical Artist
            <br>
            Video Editor
          </div>
        </div>
      </Developer>
      <Developer :isReversed="false" avatarPath="/images/avatars/ruiqi.jpg">
        <div class="personalInfo">
          <div class="title">
            Ruiqi Liu 
            <a href="https://www.linkedin.com/in/ruiqi-liu-530833149/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="subtitle">
            Lead Gameplay Engineer
          </div>
        </div>
      </Developer>
      <Developer :isReversed="true" avatarPath="/images/avatars/xinhe.jpg">
        <div class="personalInfo">
          <div class="title">
            Xinhe Yang 
            <a href="https://www.linkedin.com/in/xinhe-yang-92878917a/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="subtitle">
            Character Designer (Enemy) 
            <br>
            Character Engineer (Enemy)
            <br>
            UI Engineer
          </div>
        </div>
      </Developer>
      <Developer :isReversed="false" avatarPath="/images/avatars/placeholder.png">
        <div class="personalInfo">
          <div class="title">
            Peng Dan 
            <a href="https://www.linkedin.com/in/dan-peng-4a8a191a1/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="subtitle">
            Character Designer (Boss)
            <br>
            Character Engineer (Boss) 
            <br>
            UI Engineer
          </div>
        </div>
      </Developer>
      <Developer :isReversed="true" avatarPath="/images/avatars/jialuo.jpg">
        <div class="personalInfo">
          <div class="title">
            Jialuo Zhang  
            <a href="https://www.linkedin.com/in/jialuo-zhang-50a4b1195/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="subtitle">
            UI Engineer
            <br>
            Audio Editor
          </div>
        </div>
      </Developer>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { Developer, Footer } from '@/components'

export default {
  name: 'Team',
  components: {
    Developer,
    Footer
  },
}
</script>

<style lang="scss" scoped>
  .team {
    height: 100%;
    
    display: flex;
    flex-direction: column;
  }

  .mainContent {
    margin: 5vh 0px;
    display: flex;
    flex-direction: column;
    gap: 6vh;
  }

  .personalInfo {
    width: fit-content;
    margin-left: 8vw;
  }

  .personalInfo .title {
    font-size: 40px;
    display: flex;
    align-items: center;
  }

  .personalInfo .subtitle {
    margin-top: 5vh;
    font-size: 20px;
  }

  i {
    margin-left: 30px;
    font-size: 30px;
    color: #0072b1;
    cursor: pointer;
  }
</style>