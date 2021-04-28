<template>
  <v-app-bar class="navBar" clipped-right height="63" fixed>
    <div class="navContentContainer">
      <a href="https://games.usc.edu" target="_blank">
        <img height="50" width="auto" src="/images/logo/uscGames.png">
      </a>
      <router-link to="/" >
        <img height="54" width="auto" src="/images/logo/hopeIsland.png">
      </router-link>
    </div>
    <div class="navContentContainer" style="justify-content: center">
      
    </div>
    <div class="navContentContainer" style="justify-content: flex-end">
      <router-link class="navLink" to="/">Home</router-link>
      <router-link class="navLink" to="/about">About</router-link>
      <router-link class="navLink" to="/team">Team</router-link>
      <router-link class="navLink" to="/gallery">Gallery</router-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  
}
 
</script>

<style scoped lang="scss">
  .navBar {
    display: flex;
    justify-content: center;
  }

  .navContentContainer {
    display: flex;
    align-items: center;
    width: 33vw;
    padding: 0px 2%;
    gap: 6%
  }

  .navLink {
    text-decoration: none;
    color: #333333;
  }

</style>