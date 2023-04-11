import axios from 'axios';

const API_URL = 'http://localhost:8089'; // Change this to your API URL

class LoginService {
  login(email, password) {
    return axios
      .post(API_URL + '/auth/authenticate', {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          console.log(response.data.token); 
          localStorage.setItem('user', JSON.stringify(response.data));

        }

        return response.data;
      });
  }
  getUser(){
    return axios.get(API_URL+`/auth/user`,{
      headers: {
         Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      }
   })
  }



  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new LoginService();
