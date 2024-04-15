import axios from "axios";
import { loginUrl } from "./api";
import { LoginForm } from "../interfaces/data/LoginForm";

export class LoginService {
  loginPost(_: LoginForm) {
    const result = axios.post(loginUrl, {
      email: _.email,
      password: _.password
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