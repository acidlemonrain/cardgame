<template>
  <div class="hand-card"   :id="'card'+card.id"   @click.stop="chooseCard()"  >
        {{card.name}}
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
            this.$store.commit('cardchoose',this.card)
                document.getElementById('card'+this.card.id).style.opacity = 0;
                document.body.addEventListener('mousemove',this.$store.state.listen)  
     }
    },
    mounted () {    
 
        
    },
}
</script>

<style>
.ppp{
     position: fixed;
     height: 110px;
     width: 110px;
    background-color: skyblue
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
    transform: translateY(-30%)
}
</style>