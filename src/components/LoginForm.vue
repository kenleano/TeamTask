<!-- vue components must contain two words "StudentLogin.vue"-->

<template>
    <div class="login-form-container">
      <h4 id="loginTitle">Login to Team Task</h4>
      <br>
      <form @submit.prevent="login">
        <div class="login-form-field">
          <label for="email" class="login-form-label">Email:</label>
          <input type="text" class="login-form-input" v-model="email"/>
        </div>
        <div class="login-form-field">
          <label for="password" class="login-form-label">Password:</label>
          <input type="password" class="login-form-input" v-model="password"/>
        </div>
        <div>
          <button type="submit" id="loginBtn">Login</button>
        </div>
      </form>
    </div>
    <div class="splash-page">
      <img src="../assets/splashBG.png">
    </div>
  </template>
  
  <script>
  import LoginService from '../services/LoginService';
  
  export default {
    name: "LoginForm",
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      async login() {
        try {
          // make a request to the server to authenticate the user with the email and password provided
          const response = await LoginService.login(this.email, this.password);
          // store the access token in local storage
          localStorage.setItem('token', response.data.token);

          // redirect the user to the projects page
          this.$router.push('/projects');
        } catch (error) {
          console.error(error);
        }
      }
    }
  }
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
