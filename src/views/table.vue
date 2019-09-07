<template>
  <div>

      <div v-show="!isMatch"  class="loading">
          <div class="loading-text fi-center">
            正在匹配中
          </div>
        <div class="fi-center">
                    <semipolar-spinner
                     :animation-duration="2000"
                     :size="400"
                    color="#ff1d5e"
                    class="loading-spinner"
                    />
        </div>
      </div>
       <div v-if="isMatch">
               <enemy></enemy>
               <enemy-table></enemy-table>
                <mine-table></mine-table>
                  <mine></mine>
                  <div class="clock" > <h1>  
   
                      <span v-show="turn">你的回合</span>
                     {{clock}}</h1>  </div>
       </div>
  </div>
</template>

<script>

import enemy from './../components/table/enemy'
import enemyTable from './../components/table/enemyTable'
import mine from './../components/table/mine'
import mineTable from './../components/table/mineTable'
import io from 'socket.io-client'
import { SemipolarSpinner  } from 'epic-spinners'
export default {
  data() {
    return {
      isMatch:false,
      hourGlass:null
    }
  },
  computed: {
    clock() {
      return this.$store.state.clock 
    },
    turn(){
        return this.$store.state.gameInfo.id ==  this.$store.state.gameInfo.turn
    },
    socket(){
        return this.$store.state.socket
    },
    turnid(){
        return this.$store.state.gameInfo.turn
    },
    id(){
      return this.$store.state.gameInfo.id
    }
  },
    components: {
        enemy,mine,enemyTable,mineTable,   SemipolarSpinner
    },
   mounted () {
      this.$store.commit('socketInit',io("http://106.15.183.147:5000"))
        this.socket.on('gameInfo',res=>{
          console.log(res);       
        this.$store.commit('gameinit',res)
      })
      this.socket.on('userMatched',res=>{
      console.log(res);
      this.$store.commit('gameinit',res)
      this.isMatch = true
      this.socket.on('hourGlass',res=>{
        this.$store.commit('clockUpdate',res)        
      })
      })
   },
   watch: {
     turn(from, to) {
       this.$store.commit('setAttackMode',false)
     }
   },
     destroyed() {
    this.socket.disconnect()
  }
}
</script>
<style>
.loading{
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: rgba(78, 43, 43, 0.609)
}
.loading-text{
  position: relative;
  bottom: 0px;
   text-align: center;
   color: whitesmoke;
   font-size: 40px;
   text-shadow: 0px 0px 30px whitesmoke;
   letter-spacing: 7px;
   filter: blur(3px);
   animation: loading 1s infinite  ;
}
.loading-spinner{
  opacity: .4;
}
@keyframes loading {
  0%{
    filter: blur(5px)
  }
  100%{
    filter: blur(0px)
  }
}
.clock{
  position: fixed;
  top: 50vh;
  right: 60px;
  z-index: 999;
  color: black
}
</style>