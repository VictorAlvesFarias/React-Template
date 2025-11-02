import axios from "axios";
import { env } from "../environment";
import { BaseHttpService, catchErrors } from "typescript-toolkit";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

class LoginService extends BaseHttpService {
  constructor() {
    super(() => ({
      config: () => ({
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('accessToken') ?? ''}`
        },
      }),
      then: (res) => res,
      catch: (error) => {
        catchErrors(error, (e, m) => {
          toast.error(m)
        })

        return error
      }
    }))
  }

  public async loginPost(data: { email: string; password: string; }) {
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
  public logout() {
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
