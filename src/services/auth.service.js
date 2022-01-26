import axios from "axios";

// const API_URL = "http://103.9.0.239:31441/oauth/token?grant_type=password";
// const API_URL = "http://10.14.101.202:31441/dev/oauth/token?grant_type=password";
const API_URL = "http://localhost:8086/oauth/token?grant_type=password";

class AuthService {
  login(username, password) {
    return axios.post(
        API_URL, {}, {
          headers: {
             'Authorization': 'Basic Y2xpZW50MzpjbGllbnQz',
          },
          params: {
            username: username,
            password: password,
          }
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.access_token) {
          // currentUser = response.data;
          // const currentUser = Object.assign({}, response.data);
          // const currentUser = {...response.data};
          // const currentUser = JSON.parse(JSON.stringify(response.data));
          
          response.data.username = username;

          // JSON.stringify to convert a JavaScript object into a string 
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      })
      .catch(err => {
        // console.log('Error when calling Backend:', { err });
        throw err;
      });
  }

  // logout() {
  logout(username) {
    localStorage.removeItem("user");
    localStorage.removeItem("requestBody");
    localStorage.setItem("old_user", username );
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
