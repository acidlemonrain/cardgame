<template>
  <div  >
      
     <div class="hand-card-collections">
            <hand-card  :card=card v-for="card in cards" :key="card.id"></hand-card>
     </div>
  </div>
</template>

<script>
import handCard from './handCard';
export default {
    components: {
        handCard,
    },
    computed: {
        //手牌
        cards() {
            return this.$store.state.gameInfo.handcards 
        }
    },
}
</script>

<style>

.hand-card-collections{
    display: flex;
    flex-flow: row;
    
}
</style>