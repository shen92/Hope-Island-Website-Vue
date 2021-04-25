<template>
  <div id="app">
    <NavBar/>
    <div style="height: 60px"></div>
    <div id="appContent">
      <router-view/>
    </div>
    <div>footer</div>
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
  color: #333333
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

#appContent {
  flex-grow: 1;
}
</style>
