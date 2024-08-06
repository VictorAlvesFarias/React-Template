import Cookies from 'js-cookie'
import { ICookies } from '../interfaces/shared/cookie'

class CookiesService {
    public get(cookie: keyof ICookies) {
        return Cookies.get(cookie)
    }
}

const cookiesService = new CookiesService()

export {
    CookiesService,
    cookiesService
}