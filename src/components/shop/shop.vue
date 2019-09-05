<template>
  <div>
      <div class="shopbg fullwindow">
          <div class="shop-mask fullwindow">

                <div class="shop-main">
                        <div class="shop-hot">
                            
                            <div class="hot-card re-center">
                                    <div class="hot-card-img">
                                            <div class="card-mask">

                                            </div>
                                    </div>
                            </div>
                        </div>
                        <div class="shop-other">
                                <div class="other-card"></div>
                                <div class="other-card"></div>
                                <div class="other-card"></div>
                                <div class="other-card"></div>
                                <div class="other-card"></div>
                                <div class="other-card"></div>
                        </div>
                </div>

          </div>
      </div>
  </div>
</template>

<script>
import card from '../commom/shopCard';
export default {
    components: {
        card,
    },
}
</script>

<style>
.shopbg{
    position: fixed;
      background-image:  url('~@/assets/shop-shopbg.jpg') ;
    background-size: cover;
}
.shop-mask{
    background-color: rgba(230, 147, 109, 0.541)
}
.shop-main{
    border: 1px solid black;
    height: 85vh;
    width: 100vw;
    position: relative;
    top: 30px;
    display: flex;

}
.shop-hot{
    height: 100%;
    width: 40%;
    background-color: rgba(240, 128, 128, 0.349)
}
.hot-card{
    height: 400px;
    width: 300px;
    overflow: hidden;
    border: 4px solid rgba(200, 157, 78, 0.89);
    box-shadow: 0px 0px  20px lightyellow
}
.hot-card-img{
    height: 100%;
    width: 100%;
    background-image:  url('~@/assets/hotcard.jpg') ;
    background-size: cover;
    background-position: center;
    transition: all .2s;
}
 .hot-card-img:hover{
     transform: scale(1.1)
 }
 .shop-other{
     padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start
 }
 .other-card{
    height: 250px;
    width: 170px;
    background-color: rgba(153, 205, 50, 0.397);
    margin: 10px;
        background-image:  url('~@/assets/hotcard.jpg') ;
    background-size: cover;
    background-position: center;
 }
</style>