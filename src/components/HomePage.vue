<template>
  <div>
    <img src="../assets/tt-logo.png" id="logoSplash">
    <h1>Welcome to TeamTask</h1>
    <button id="login">
      <router-link to="login" style="text-decoration: none">Login</router-link>
    </button>
    <button id="register">
      <router-link to="/register" style="text-decoration: none">Register</router-link>
    </button>
    <div class="splash-page">
      <img src="../assets/splashBG.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      studentLoginRequest: { studentId: "", password: "" },
      message: ""
    };
  }
};
</script>

<style>
#logoSplash {
  height: 200px;
}

.splash-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.splash-page img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#login {
  color: #fff;
}

#login, #register {
  margin: 20px;
  padding: 20px;
  width: 150px;
  border: none;
  color: #fff;
  border-radius: 10px;
  font-size: 25px;
  text-decoration: none;
  font-weight: bold;
}

#login:hover,
#register:hover {
  cursor: pointer;
  background-color: #ddd;
}
#login:visited,
#register:visited {
  cursor: pointer;
  background-color: #ddd;
}

#login:active,
#register:active {
  background-color: #aaa;
}

#login:focus,
#register:focus {
  outline: none;
}

#login {
  background-color: #fdfeff;
  color: #fff;
}

#register {
  background-color: #fff;
  color: #ffffff;
}

h1 {
  font-size: 50pt;
  text-align: center;
}

body {
  background-color: #909efb;
}

router-link {
  text-decoration: none;
}

router-link:visited {
  color:#ffffff;
  text-decoration: none;
}


</style>
