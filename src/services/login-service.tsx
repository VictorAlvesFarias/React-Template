import axios from "axios";
import { env } from "../environment"
import { LoginSchema } from "../pages/Login";

class LoginService {
  loginPost(data: LoginSchema) {
    const result = axios.post(env, {
      email: data.email,
      password: data.password
    })
      .then(response => {
        return response
      })
      .catch((error) => {
        throw error
      })
    return result
  }
}

export {
  LoginService
}