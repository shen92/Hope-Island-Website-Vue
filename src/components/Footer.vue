<template>
  <v-footer  height="120">
    <div class="footer">
      <div class="leftColumn">
        <div>COPYRIGHT 2021 BuggyPunk - ALL RIGHTS RESERVED</div>
        <div style="margin-top: 10px">Powered by VueJS, Developed by Yingjie Shen</div>
      </div>
      <div class="rightColumn">
        <div class="iconContainer">
          <a href="https://www.facebook.com/uscgames/" target="_blank">
            <i class="fab fa-facebook-square" style="color: #4267B2"></i>
          </a>
          <a href="https://twitter.com/uscgames" target="_blank">
            <i class="fab fa-twitter-square" style="color: #00acee"></i>
          </a>
          <a href="https://www.instagram.com/hope_island_official/" target="_blank">
            <i class="fab fa-instagram" style="color: #8a3ab9"></i>
          </a>
          <a href="https://www.youtube.com/channel/UChzcGOornmEtVXQJNHiZ95A" target="_blank">
            <i class="fab fa-youtube-square" style="color: #FF0000"></i>
          </a>
        </div>
      </div>
    </div>
  </v-footer>
</template>

<style lang="scss" scoped>
  .footer {
    padding: 0px 5%;
    width: 100%;
    display: flex;
  }

  .leftColumn {
    width: 60%;
  }

  .leftColumn div{
    width: fit-content;
  }

  .rightColumn {
    width: 40%;
  }

  .iconContainer {
    display: flex;
    gap: 5%;
    justify-content: center;
  }

  i {
    font-size: 36px;
    cursor: pointer;
  }
</style>