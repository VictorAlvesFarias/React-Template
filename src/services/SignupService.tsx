
import axios from 'axios';
import { registerUserUrl } from './api';
import { SignupForm } from '../interfaces/data/SignupForm';

export class SignupService {
  async signupPost(_: SignupForm) {
    const result = axios.post(registerUserUrl,
      {
        username: _.email,
        password: _.password,
        confirmPassword: _.passwordConfirm
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
