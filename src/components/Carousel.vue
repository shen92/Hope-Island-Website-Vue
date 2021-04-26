<template>
  <v-carousel hide-delimiters cycle :prev-icon="false" :next-icon="false" height="100vh" :interval="5000">
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
      "/images/scenes/level0.jpg",
      "/images/scenes/level1-1.jpg",
      "/images/scenes/level1-2.jpg",
      "/images/scenes/level1-3.jpg",
      "/images/scenes/level1-4.jpg",
      "/images/scenes/level1b.jpg",
      "/images/scenes/level2-1.jpg",
      "/images/scenes/level2-2.jpg",
      "/images/scenes/level2-3.jpg",
      "/images/scenes/level2b.jpg",
      "/images/scenes/level3-1.jpg",
      "/images/scenes/level3-2.jpg",
      "/images/scenes/level3-3.jpg",
      "/images/scenes/level3b.jpg",
      "/images/characters/charlottel1.jpg",
      "/images/characters/charlottel2.jpg",
      "/images/characters/charlottel3.jpg",
      "/images/characters/marcl1.jpg",
      "/images/characters/marcl2.jpg",
      "/images/characters/marcl3.jpg",
      "/images/characters/vincentl1.jpg",
      "/images/characters/vincentl2.jpg",
      "/images/characters/vincentl3.jpg",
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