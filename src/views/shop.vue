<template>
  <div>
      <div class="shop-nav">
          <router-link to="/shop/cart">cart</router-link>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.shop-nav{
    position: fixed;
    right: 50px;
    z-index: 999;
    color: white;
}
</style>