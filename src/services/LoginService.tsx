import axios from "axios";
import { loginUrl } from "./api";

export class LoginService {
    loginPost({ email, password }: { email: string; password: string }) {
        const result = axios.post(loginUrl, {
            email: email,
            password: password
          })
          .then(response => {
            return response 
          })
          .catch((error)=>{
           throw error
          })
          return result
    }
}