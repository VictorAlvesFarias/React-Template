import axios from "axios";
import { env } from "../environment";
import { BaseService } from "./base-service";
import Cookies from "js-cookie";

class LoginService extends BaseService {
  public async loginPost(data) {
    const result = this.post<any>({ api: env, href: "/api/account/login", params: {} }, {
      email: data.email,
      password: data.password
    }).then(({ res: data }) => {
      const keys = Object.keys(data)

      keys.forEach(e => {
        if (typeof data[e] == "object") {
          Cookies.set(e, JSON.stringify(data[e]), { expires: Number(data.expirationTimeAccessToken) })
        }
        else {
          Cookies.set(e, data[e], { expires: Number(data.expirationTimeAccessToken) })
        }
      })

      return data
    })

    return result;
  }
  public  logout() {
    const keys = Object.keys(Cookies.get())
    keys.forEach(e => {
      Cookies.remove(e)
    })
  }
}

const loginService = new LoginService()

export {
  LoginService,
  loginService
}
