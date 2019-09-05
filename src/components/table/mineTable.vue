<template>
  <div class="mine-table" @click="cardDown($event)">
      <div class="table-cards">
          <div v-for="(item) in cards" :key="item.id" class="table-card">
          {{ item.name }}
        </div>
      </div>
        <div id="chooseCard">
                {{choosedCard.name}}
        </div>
       
  </div>
</template>

<script>
export default {
computed: {
      //桌面牌
  cards() {
    return this.$store.state.tablecards 
  },
    //被选牌
  choosedCard(){
    return  this.$store.state.choosedCard
  }
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
               document.getElementById('chooseCard').style.top=  '-100px';
                document.getElementById('chooseCard').style.left= '-100px'; 
                document.body.removeEventListener('mousemove',this.$store.state.listen)
  },
  //下牌
  cardDown(event) {
    
        if(this.$store.state.chooseId !== null){
                var bottom  = window.innerHeight - event.clientY
                if(bottom<200){
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
    transform: translate(-50%,-50%)
}
.table-cards{
  display: flex;
  margin: auto;
}
.table-card{
  height: 100px;
  width: 50px;
  background-color: rgba(135, 207, 235, 0.472);
  margin: 10px;
}
.mine-table{
    height: 30vh;
    width: 100vw;
    background-color: rgb(250, 191, 135);
}
</style>