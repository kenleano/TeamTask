<template>
    <div class="registration-form-container">
        <h2 class="registration-form-title">Registration</h2>
        <form class="registration-form">
            <div class="registration-form-field">
                <label for="fullname" class="registration-form-label">Full Name:</label>
                <input type="text" id="fullname" class="registration-form-input" v-model="memberRegisterRequest.name"/>
            </div>
            <div class="registration-form-field">
                <label for="email" class="registration-form-label">Email:</label>
                <input type="text" id="email" class="registration-form-input" v-model="memberRegisterRequest.email"/>
            </div>
            <div class="registration-form-field">
                <label for="password" class="registration-form-label">Password:</label>
                <input type="password" id="password" class="registration-form-input" v-model="memberRegisterRequest.password"/>
            </div>
            <div class="registration-form-field">
                <button type="submit" @click.prevent="register" id="regBtn">Register</button>
            </div>
        </form>
    </div>
</template>
<script>
import RegisterService from "../services/RegisterService.js";
export default {
    name: "RegistrationForm",
    data() {
        return {
            memberRegisterRequest: { name: "", email: "", password: "" },
            message: ""
        };
    },
    methods: {
        register() {
            RegisterService.register(this.memberRegisterRequest)
                .then(response => {
                    // Assuming the response will return a token
                    localStorage.setItem("token", response.data.token);
                    this.message = response.data.message;
                    this.$router.push("/login");
                })
                .catch(e => {
                    this.message = e.response.data.message;
                });
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