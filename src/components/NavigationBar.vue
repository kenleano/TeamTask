<template>
    <nav>
      <ul>
        <!-- <li><router-link to="/profile">Profile</router-link></li> -->
        <li><router-link to="/projects">Projects</router-link></li>
        <!-- <li><router-link to="/members">Members</router-link></li> -->
        <li v-if="isManager"><router-link to="/admin">Admin</router-link></li>
        <button @click="logOut">Log Out</button>
      </ul>
     
    </nav>
  </template>
  
  <script>
      import LoginService from '@/services/LoginService.js';

  export default {

    name: 'NavigationBar',

    data() {
    return {
      isManager:  JSON.parse(localStorage.getItem('role'))==="PROJECT_MANAGER" ? true :false, 



    }
    },
    methods: {
      logOut(){
          LoginService.logout(); 
          this.$router.push('/');


      }
    },
  }
  
  </script>
  
  <style>
  nav {
  position: fixed;
  top: 0;
  left: 0;
  padding:12px;
  width: 100%;
  background-color: #ffffff; /* change the background color as desired */
}

nav ul {
  background-color: #ffffff; 
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin: 0 10px;
}

nav a {
  text-decoration: none;
  color: #5051F9; /* change the text color as desired */
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease-in-out;
}

nav a:hover {
  border-bottom: 3px solid #FBFAFF; /* change the border color as desired */
}

nav li:hover a {
  background-color: #E7E7FF; /* change the background color as desired */
}

  </style>
  