import http from "../http-common.js";

class RegisterService {
  register(data) {
    return http.post("/auth/register", data);
  }
}

export default new RegisterService();
