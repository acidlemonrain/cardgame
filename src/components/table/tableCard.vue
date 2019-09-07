<template>
  <div class="table-card"   @click="chooseCard()"  >
    <div>    {{card.name}}</div>
        <div>攻击 : {{card.attack}}  防御 : {{card.arm}}     </div>
          <div>生命值 : {{card.health}}</div>
  </div>
</template>

<script>
export default {
  props:['card'],
  methods: {
    chooseCard() {
      if(this.turn){
         this.$store.commit('setAttackMode',true)
         this.$store.commit('setChooseTableCard',this.card)
      }
    }
  },
  computed: {
     turn(){
        return this.$store.state.gameInfo.id ==  this.$store.state.gameInfo.turn
    },
  },
}
</script>

<style>
.table-card{
    position: relative;
    height: 100px;
    width: 70px;
    background-color: rgb(235, 208, 135);
    border: 1px solid #ccc;
    transition: all .3s;
}
</style>