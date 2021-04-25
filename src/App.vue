<template>
  <div id="app">
    <NavBar/>
    <div style="height: 60px"></div>
    <div id="appContent">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { NavBar } from '@/components'

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>


<style lang="scss">
html, body{
  height: 100%;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  overflow-x: hidden;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

#appContent {
  flex-grow: 1;
}

.gameTitle {
  font-family: 'New Rocker', cursive;
}

.title {
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
}

.subtitle {
  font-family: 'Raleway', sans-serif;
}

.content {
  font-family: 'Open Sans', sans-serif;
}
</style>
