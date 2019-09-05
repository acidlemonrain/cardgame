<template> 
    <router-view/>
</template>

<style>

.mask{
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.513)

}
.card-mask{
    height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.513);
  transition:  all .2s;
}
.card-mask:hover{
  background-color: rgba(0, 0, 0, 0.185);
}

</style>
