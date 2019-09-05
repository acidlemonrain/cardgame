<template>
  <div class="login-bg">
      
        <div class="mask">


        <div class="fi-center login-card">
                <div class="login-mask">
                   <v-container>
                         <div >
                             <h3 style="color:#ccc">登录</h3>
                         </div>
                   </v-container>
           <div class="" style="margin-top:10px">
             
                  
                   <v-text-field outlined rounded    dark   label="用户名" ></v-text-field>
                   <v-text-field outlined rounded    dark   label="密码" ></v-text-field>
                  
                  <v-card-actions style="margin-top:40px">
                    <v-spacer></v-spacer>
                    <v-btn style="margin-right:8px"   outlined color="#ccc" @click="login" > 登录</v-btn>
                   <v-btn color="#ccc" outlined>注册</v-btn>
                  </v-card-actions>
            
           </div>
            
               
                </div>
 
        </div>
      
       
       


        </div>

  </div>
</template>

<script>
export default {
    methods: {
        login() {
                this.$router.push('index');
        }
    },
}
</script>

<style>
.login-bg{
    height: 100vh;
    width: 100vw;
    background-image:  url('~@/assets/login.jpg');
    background-size: cover;
}
 .login-card{
     height: 400px;
     background-size: cover;
     background-image:  url('~@/assets/logincard.jpg');
     
     box-shadow: 0px 0px 40px rgba(13, 14, 14, 0.897);
 }
 .login-mask{
            height: 100%;
            width: 100%;
          padding: 40px 20px;
          background-color: rgba(0, 0, 0, 0.582);
 }
input.login{
    border:none;
}
</style>