import axios from "axios";

const API_URL = "http://localhost:8089";

class LoginService {
  login(email, password) {
    return axios
      .post(API_URL + '/auth/authenticate', {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          throw new Error('Invalid email or password');
        }
        throw error;
      });
  }

  logout() {
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
    return user;
  }
  
}

export default new LoginService();
