
import axios from 'axios';
import { env } from '../environment';
import { SignupSchema } from '../pages/Signup';

class SignupService {
  async signupPost(data: SignupSchema) {
    const result = axios.post(env,
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