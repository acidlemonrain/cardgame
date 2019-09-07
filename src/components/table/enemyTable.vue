<template>
  <div class="enemy-table">
 
    <div v-show="!attackMode"   class="table-cards"    >
     
        <enemy-table-card  @choose=choose :card=card v-for="card in cards" :key="card.id">
       
      </enemy-table-card>
  
    </div>

    <div v-show="attackMode" class="attack-mode">
     <div class="half3" :class="{ attackbattle: attackMode }">        
 <enemy-table-card   :card=card v-for="card in cards" :key="card.id"> </enemy-table-card>
     </div >
     
    <div class="half2">
        <attack-mode :card=attackcard :chooseEnemy=chooseEnemy>
        </attack-mode>
    </div>
 </div>
  </div>
</template>

<script>
import enemyTableCard from './enemyTableCard'
import attackMode from './attackMode'
export default {
  data() {
    return {
      chooseEnemy:  {}
    }
  },
  methods: {
    choose(e) {
     
      console.log(e);
      
      this.chooseEnemy=e
    }
  },
  components: {
    enemyTableCard,attackMode
  },
  computed: {
    cards(){
          return this.$store.state.gameInfo.enemytablecards ;
          
      },
     attackMode(){
          return this.$store.state.attackMode ;
      },
      attackcard(){
           return this.$store.state.chooseTableCard
      }
  },
 
}
</script>

<style>
.attackbattle{
  box-shadow: inset 0px 0px 45px  rgba(255, 0, 0, 0.527)
}
.enemy-table{
    height: 30vh;
    width: 100vw;
    background-color: rgba(191, 250, 135, 0.322);
}
.attack-mode{
    position: relative;
    display: flex;
    height: 30vh;
    width: 100vw;
    background-color: rgba(189, 157, 117, 0.322);
}
.half3{
  height: 100%;
      display: flex;
  width: 60%;
  border: 1px solid black;
}
.half2{
  height: 100%;
  width: 40%;
  border: 1px solid black;
}
</style>