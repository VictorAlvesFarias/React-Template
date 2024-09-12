
import axios from 'axios';
import { env } from '../environment';
import { BaseService } from './base-service';

class SignupService extends BaseService{
  async signupPost(data) {
    const result = this.post({api:env,href:"",params:""},
      {
        username: data.email,
        password: data.password,
        confirmPassword: data.passwordConfirm
      }
    )
      .then(response => {
        return response
      })
      .catch((error) => {
        throw error
      })

    return await result
  }
}

export {
  SignupService
}