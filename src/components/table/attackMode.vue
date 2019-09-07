<template>
  <div>
        <div class="flex">
            <div width=50%>
                         <q>
          请选择要攻击的敌人
      </q>
          
          <card :card=card></card>
          vs  
          <enemyCard  v-if="attackedCard"  :class='{hide:attackedCard == null}' :card=attackedCard></enemyCard>
          
            </div>
            <div width=50%>
                <v-btn outlined="" @click="attack">确定</v-btn>
            </div>
        </div>
  </div>
</template>

<script>
import enemyCard from './enemyTableCard'
import card from './tableCard'
export default {
    props: ['card'],
    components: {
        card,enemyCard
    },
    computed: {
        attackedCard() {
            return this.$store.state.attackedCard 
        },
        chooseTableCard(){
            return this.$store.state.chooseTableCard 
        },
        socket(){
        return this.$store.state.socket
    },
    },
    methods: {
        attack(){
            console.log(this.chooseTableCard);
            console.log(this.attackedCard);
               this.$store.commit('cardPK',{
                   attacker:this.chooseTableCard,
                   attacked:this.attackedCard
               })       
                this.socket.emit('gameInfo',this.$store.state.gameInfo)
         }   
    },
    
}
</script>

<style>
.flex{
    display: flex;

}
.hide{
    transition: all .2s;
    opacity: 0;
}
</style>