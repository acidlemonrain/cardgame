<template>
  <div class="table-card enemy-card"  @click="choose()" >
    <div>    {{card.name}}</div>
        <div>攻击 : {{card.attack}}  防御 : {{card.arm}}     </div>
          <div>生命值 : {{card.health}}</div>
  </div>
</template>

<script>
export default {
  props:['card'],
  methods: {
      choose(){   
          this.$store.commit('setAttackedCard',this.card)
      }
  },
  computed: {

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
     box-shadow:   0px 0px 10px rgb(53, 123, 236)
}
 .enemy-card:hover{
 box-shadow: 0px 0px 10px rgba(240, 128, 128, 0.603)
}
</style>