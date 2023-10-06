 
import axios from 'axios';
import { registerUserUrl } from './api';

export class SignupService {
    async signupPost({email,password,passwordConfirm}) {
      const result = axios.post(registerUserUrl, 
          {
              username: email,
              password: password,
              confirmPassword: passwordConfirm
          }
        )
        .then(response => {
          return response
        })
        .catch((error)=>{
          throw error 
        })
  
        return await result 
  }
}
