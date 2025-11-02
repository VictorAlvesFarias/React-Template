
import axios from 'axios';
import { env } from '../environment';
import Cookies from 'js-cookie';
import { BaseHttpService, catchErrors } from 'typescript-toolkit';
import { toast } from 'react-toastify';

class SignupService extends BaseHttpService {
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

  async signupPost(data: { email: string; password: string; passwordConfirm: string; }): Promise<any> {
    const result = this.post({ api: env, href: "", params: "" },
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

const signupService = new SignupService()

export {
  SignupService,
  signupService
}