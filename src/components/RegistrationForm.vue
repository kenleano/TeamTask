<template>
    <div class="registration-form-container">
        <h2 class="registration-form-title">Registration</h2>
        <form class="registration-form">
            <div class="registration-form-field">
                <label for="fullname" class="registration-form-label">Full Name:</label>
                <input type="text" id="fullname" class="registration-form-input"/>
            </div>
            <div class="registration-form-field">
                <label for="email" class="registration-form-label">Email:</label>
                <input type="text" id="email" class="registration-form-input"/>
            </div>
            <div class="registration-form-field">
                <label for="password" class="registration-form-label">Password:</label>
                <input type="password" id="password" class="registration-form-input"/>
            </div>
            <div class="registration-form-field">
                <button type="submit" @click="register" id="regBtn">Register</button>
            </div>
        </form>
    </div>
    <div class="splash-page">
  <img src="../assets/splashBG.png">
</div>
</template>

<script>
export default {
    name: "RegistrationForm",
    data() {
        return {
            studentLoginRequest: { studentId: "", password: "" },
            message: ""
        };
    },
    methods: {
        register() {
            // handle form submission here
        }
    }
};
</script>

<style>
.registration-form-container {
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

.registration-form-field {
    margin-bottom: 20px;
    width:80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.registration-form-label {
    display: block;
    margin-bottom: 5px;
}

.registration-form-input {
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

  </style>