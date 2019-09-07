<template>
  <div class="mine" id="mine" >
      
       <hand-card class="mine-hand-card"></hand-card>
       
  </div>
</template>

<script>
import handCard from './handCards'
export default {
components: {
    handCard,
},
methods: {

},
}
</script>

<style>
#card-cancel-mask{
 
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.219);
  position: absolute;
  z-index: 0;
  bottom: 0;
}
 
.mine{
    height: 20vh;
    width: 100vw;
    background-color: lightskyblue;
    z-index: 12;
   transition: all .2s
}
.mine-hand-card{
    display: inline-block;
    position: relative;
    left: 50%;
    top: 80%;
    transform: translate(-50%,-50%);
}
</style>