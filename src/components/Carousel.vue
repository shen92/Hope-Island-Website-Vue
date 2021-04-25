<template>
  <v-carousel hide-delimiters cycle :prev-icon="false" :next-icon="false" height="100vh">
    <v-carousel-item
      v-for="(path,i) in images"
      :key="i"
      :src="path"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
const shuffle = (array) => {
      let currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
export default {
  name: 'Carousel',
  data() {
    let images = [
      "/images/scenes/level0.png",
      "/images/scenes/level1-1.png",
      "/images/scenes/level1-2.png",
      "/images/scenes/level1-3.png",
      "/images/scenes/level1-4.png",
      "/images/scenes/level1b.png",
      "/images/scenes/level2-1.png",
      "/images/scenes/level2-2.png",
      "/images/scenes/level2-3.png",
      "/images/scenes/level2b.png",
      "/images/scenes/level3-1.png",
      "/images/scenes/level3-2.png",
      "/images/scenes/level3-3.png",
      "/images/scenes/level3b.png",
      "/images/characters/charlottel1.png",
      "/images/characters/charlottel2.png",
      "/images/characters/charlottel3.png",
      "/images/characters/marcl1.png",
      "/images/characters/marcl2.png",
      "/images/characters/marcl3.png",
      "/images/characters/vincentl1.png",
      "/images/characters/vincentl2.png",
      "/images/characters/vincentl3.png",
    ];
    images = shuffle(images)
    return {
      images
    }
  }
}
</script>

<style lang="scss" scoped>
</style>