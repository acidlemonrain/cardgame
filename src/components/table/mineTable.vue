<template>
  <div class="mine-table" @click="cardDown($event)">
      <div class="table-cards">
        
         <table-card :card=card v-for="card in cards" :key="card.id">
         </table-card>
      </div>
        <div id="chooseCard">
                {{choosedCard.name}}
        </div>
       
  </div>
</template>

<script>
import tableCard from './tableCard'
export default {
    components: {
    tableCard
  },
computed: {
      //桌面牌
  cards() {
    return this.$store.state.gameInfo.tablecards 
  },
    //被选牌
  choosedCard(){
    return  this.$store.state.choosedCard
  },
    socket(){
        return this.$store.state.socket
    },
},
methods: {

  //取消选牌
  cardcancel(){
              this.$store.commit('cardcancel')
              document.getElementById('chooseCard').style.top=  '-100px';
              document.getElementById('chooseCard').style.left= '-100px'; 
              document.body.removeEventListener('mousemove',this.$store.state.listen)      
  },
  //确定下牌
  cardconfirm(){
                this.$store.commit('carddown',this.$store.state.chooseId)
                this.socket.emit('gameInfo',this.$store.state.gameInfo)
                document.getElementById('chooseCard').style.top  =  '-100px';
                document.getElementById('chooseCard').style.left = '-100px'; 
                document.body.removeEventListener('mousemove',this.$store.state.listen)
  },
  //下牌
  cardDown(event) {
        if(this)
        if(this.$store.state.chooseId !== null){
                     document.getElementById('mine').style.backgroundColor = 'lightskyblue'
                var range = window.innerHeight - document.getElementById('mine').clientHeight
                if(event.clientY > range ){
                  this.cardcancel()
                }else{
                  this.cardconfirm()
                }
        }
  },

},
}
</script>

<style>

#chooseCard{
    position: fixed;
    height: 100px;
    width: 50px;
    background-color: rgb(235, 208, 135);
    border: 1px solid #ccc;
    transform: translate(-50%,-50%);
    box-shadow: 0px 0px 5px orangered
}
.table-cards{
  display: flex;
  margin: auto;
}
.table-card{
  height: 100px;
  width: 100px;
  background-color: rgba(135, 207, 235, 0.472);
  margin: 10px;
}
.mine-table{
    height: 30vh;
    width: 100vw;
    background-color: rgba(51, 39, 28, 0.294);
}
</style>