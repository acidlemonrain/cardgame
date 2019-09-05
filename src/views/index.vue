<template>
  <div id="index" class="fullwindow">
         <div class="fullwindow index-mask">        
               <div class="index-main b re-center">
                    <div class="index-main-card b index-match">
                         <router-link to="/table">
                              <div class="card-mask">
                               <div class="index-card-text">   快速匹配         </div>
                          </div>
                         </router-link>
                    </div>
                    <div class="index-main-card b index-room">  
                       <div class="card-mask">
                            <div class="index-card-text">   进入房间         </div>
                       </div>
                    </div>
                    <div class="index-main-card b index-goods"> 
                    <router-link to="/shop">
                         <div class="card-mask">
                            <div class="index-card-text">   购买商品         </div>
                     </div>
                    </router-link>
                    </div>
               </div>
         </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

    #index{
    background-image:  url('~@/assets/indexbg.jpg') ;
    background-size: cover;
    }

    .index-mask{
        background-color: rgba(46, 113, 221, 0.383)
    }
    .b{
        border: 1px solid wheat;
    }
    .index-main{
       position: relative;
        padding: 50px;
        width: 1300px;
        height: 700px;
        display: flex;
        justify-content: space-between;
    }

    .index-main-card{
        width: 30%;
        height: 500px;
        transition:  all .3s;
        text-align: center;   
    }
    .index-card-text{
        position: relative;
        top: 40%;
        color: rgba(179, 202, 221, 0.678);
        text-shadow: 0px 0px 10px rgba(61, 68, 75, 0.883);
        font-weight: bold;
        font-size: 50px;
        filter: blur(1px);
       letter-spacing: 5px;
    }
    .index-main-card:hover{
        box-shadow: 0px 0px 30px rgba(224, 32, 32, 0.692)
    }
    .index-btn{
        margin-bottom: 60px;
    }
    .index-match{

            background-size: cover;
             background-position: center;
            background-image:  url('~@/assets/index1.png') ;
    }
      .index-room{
            background-size: cover;
            background-position: center;
            background-image: url('~@/assets/index2.jpg');
    }
          .index-goods{
            background-size: cover;
            background-image: url('~@/assets/index3.png');
    }
</style>