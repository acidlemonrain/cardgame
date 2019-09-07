<template>
  <div class="hand-card"   :id="'card'+card.id"   @click.stop="chooseCard()"  >
    <div>    {{card.name}}</div>
        <div>攻击 : {{card.attack}}  防御 : {{card.arm}}   </div>
        <div>生命值 : {{card.health}}</div>
  </div>
</template>

<script>
export default {
    props:['card'],
    data() {
        return {
      
        }
    },
    methods: {
        chooseCard() {
          if(this.turn){
                this.$store.commit('cardchoose',this.card)
                document.getElementById('card'+this.card.id).style.opacity = 0;
                document.getElementById('mine').style.backgroundColor = 'rgba(41, 42, 42, 0.39)'
                document.body.addEventListener('mousemove',this.$store.state.listen)  
          }else{
              alert('还没有轮到你出')
          }
     }
    },
    mounted () {    
 
        
    },
    computed: {
        turn(){
        return this.$store.state.gameInfo.id ==  this.$store.state.gameInfo.turn
    },
    },
}
</script>

<style>
.ppp{
     position: fixed;
     height: 110px;
     width: 110px;
    background-color: rgba(41, 42, 42, 0.39)
}
.fixed{
    position: fixed;
}
.hand-card{
    position: relative;
    height: 100px;
    width: 50px;
    background-color: rgb(235, 208, 135);
    border: 1px solid #ccc;
    transition: all .3s;
}
.hand-card:hover{
    transform: translateY(-30%) scale(1.4)
}
</style>