import axios from "axios";
import { env } from "../environment";
import { useErrors } from "../utils/hooks/use-errors";
import { BaseResponseApi } from "../interfaces/types/base-response-api";
import { LoginSchema } from "../interfaces/schemas/login-schema";
import { Axios } from "../interfaces/types/axios";
import { BaseService } from "./base-service";

class LoginService extends BaseService {
  public async loginPost(data: LoginSchema) {
    const result = this.post({ api: env, href: "/login", params: {} }, {
      email: data.email,
      password: data.password
    })
      .then((response: Axios<BaseResponseApi<any>>) => {
        return response;
      })
      .catch((error) => {
        useErrors(error);
        throw error;
      });

    return result;
  }
}

export {
  LoginService
}
