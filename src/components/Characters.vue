<template>
  <div class="characters">
    <div class="characterContainer">
      <div class="characterImageContainer">
        <img src="/images/characters/vincent.jpg">
      </div>
      <div class="characterDescriptionContainer">
        <div class="title characterTitle">Vincent</div>
        <div class="content characterDescription">
          Vincent is the descendant of the Hope Island Great Warrior, who defends the Matard in the ancient.
          <br><br>
          He is also the leader of Hope Island Kingdom Guards. Vincent can equip a passive ability instead of regular stamina skills to blend rules.
        </div>
      </div>
    </div>
    <div class="characterContainer rowReverse">
      <div class="characterImageContainer">
        <img src="/images/characters/marc.jpg">
      </div>
      <div class="characterDescriptionContainer">
        <div class="title characterTitle">Marc</div>
        <div class="content characterDescription">
          Marc is a member of Hope Island Kingdom Guards. He is also the friend of Vincent. 
          <br><br>
          Marc focuses more on melee attacks, and has more skills to strengthen basic stats. But some of them have to pay a cost.
        </div>
      </div>
    </div>
    <div class="characterContainer">
      <div class="characterImageContainer">
        <img src="/images/characters/charlotte.jpg">
      </div>
      <div class="characterDescriptionContainer">
        <div class="title characterTitle">Charlotte</div>
        <div class="content characterDescription">
          Charlotte is the younger sister of Marc. She is also a member of Hope Island Kingdom Guards.
          <br><br>
          Charlotte is a magic-based character with a simple sword attack.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Characters'
}
</script>

<style lang="scss" scoped>
  .characters {
    height: 150vh;
    background: linear-gradient(180deg, rgba(174,217,224,1) 0%, rgba(250,243,221,1) 50%, rgba(255,166,158,1) 100%);;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    gap: 5vh;
    padding: 0px 10%;
  }

  .characterContainer{
    height: 40vh;
    display: flex;
  }

  .rowReverse {
    flex-direction: row-reverse;
  }

  .characterImageContainer {
    flex: 1
  }

  img {
    width: 84%;
    object-fit: contain;
    transform: scale(1.0);
    transition: transform 0.25s ease-in-out;
  }

  img:hover {
    transform: scale(1.05);
    transition: transform 0.25s ease-in-out;
  }

  .characterDescriptionContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4vh
  }

  .characterTitle {
    font-size: 40px;
  }

  .characterDescription {
    font-size: 20px;
    width: 27vw;
  }
</style>