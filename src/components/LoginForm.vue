<!-- vue components must contain two words "StudentLogin.vue"-->

<template>
    <div class="login-form-container">
      <h4 id="loginTitle">Login to Team Task</h4>
      <br>
      <form @submit.prevent="login">
        <div class="login-form-field">
          <label for="email" class="login-form-label">Email:</label>
          <input v-model="email" type="text" class="login-form-input"/>
        </div>
        <div class="login-form-field">
          <label for="password" class="login-form-label">Password:</label>
          <input v-model="password" type="password" class="login-form-input" />
        </div>
        <div>
          <button type="submit" id="loginBtn">Login</button>
        </div>
      </form>
      <div class="splash-page">
        <img src="../assets/splashBG.png">
      </div>
      <div v-if="error" class="alert alert-danger">
        {{ error }}
        <button @click="error = ''" class="close">&times;</button>
      </div>
      <div v-if="confirmMessage" class="alert alert-success">
        {{ confirmMessage }}
        <button @click="confirmMessage = ''" class="close">&times;</button>
      </div>
    </div>
  </template>
  
  <script>
  import LoginService from '@/services/LoginService.js';
  
  export default {
    name: 'LoginForm',
    data() {
      return {
        email: '',
        password: '',
        error: '',
        confirmMessage: ''
      };
    },
    methods: {
      login() {
        LoginService.login(this.email, this.password)
          .then(response => {
            if (response.token) {
              localStorage.setItem('user', JSON.stringify(response));
              localStorage.setItem('token', response.token);
              localStorage.setItem('token', JSON.stringify(response.token));
              console.log( JSON.parse(localStorage.getItem('token')))
              this.confirmMessage = 'Login Successful';
              this.$router.push('/projects');
            } else {
              this.error = 'Invalid email or password';
            }
          })
          .catch(error => {
            console.log(error);
            this.error = 'Invalid email or password';
          });
          this.getUser(); 

        
      }, 
      async getUser(){
        try{
          const res= await LoginService.getUser(); 
          localStorage.setItem('role', JSON.stringify(res.data.authorities[0].authority));
          console.log( JSON.parse(localStorage.getItem('role')))


          console.log(res.data); 

        }catch(e){
          console.log(e); 

        }

      }
    }
  };
  </script>
  
  

<style>
.login-form-container {
    width: 800px;
    height: 100vh;
    background-color: #fff;
    border-radius: 10px;
    /* center form */
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    padding: 20px;
}

.registration-form-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}

.login-form-field {
    margin-bottom: 20px;
    width:80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.login-form-label {
    display: block;
    margin-bottom: 5px;
}

.login-form-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 15px;
    
}



#regBtn {
    margin-top: 20px;
    padding: 20px;
    width: 150px;
    border: none;
    color: #fff;
    border-radius: 10px;
    font-size: 15px;
    text-decoration: none;
    font-weight: bold;
    background-color: blueviolet;
    /* center button */
    display: block;
    margin-left: auto;
    margin-right: auto;

}
#regBtn:hover {
    background-color: #2c3e50;
    cursor: pointer;
}

#regBtn a {
    color: #fff;
    text-decoration: none;
}

#regBtn a:hover {
    color: #fff;
    text-decoration: none;
}

#loginTitle {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}

#loginBtn {
    margin-top: 20px;
    padding: 20px;
    width: 150px;
    border: none;
    color: #fff;
    border-radius: 10px;
    font-size: 15px;
    text-decoration: none;
    font-weight: bold;
    background-color: blueviolet;
    /* center button */
    display: block;
    margin-left: auto;
    margin-right: auto;

}
#loginBtn:hover {
    background-color: #2c3e50;
    cursor: pointer;
}

#loginBtn a {
    color: #fff;
    text-decoration: none;
}

#loginBtn a:hover {
    color: #fff;
    text-decoration: none;
}

</style>
