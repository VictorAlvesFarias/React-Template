import axios, { Axios, AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'

export interface Route {
    api: string
    href: string
    params: any
}

export class BaseService {
    protected token: string
    protected axios: Axios
    protected config: AxiosRequestConfig

    constructor(config?:any, token?:any) {
        this.axios = axios
        this.token = token ?? `Bearer ${Cookies.get("")}`
        this.config = config ?? {
            headers: {
                Authorization: this.token
            }
        }
    }

    protected post(route: Route, body: any) {
        const result = axios.post(this.route(route), body, this.config)

        return result
    }

    protected get(route: Route) {
        const result = axios.get(this.route(route), this.config)

        return result
    }

    protected put(route: Route, body: any) {
        const result = axios.put(this.route(route), body, this.config)

        return result
    }

    protected delete(route: Route) {
        const result = axios.delete(this.route(route), this.config)

        return result
    }

    private route(route: Route) {
        const result = `${route.api}/${route.href}${this.urlParams(route.params)}`

        return result
    }

    private urlParams(params) {
        if (params) {
            const keys = Object.keys(params)
            const stringParams = keys.map(e => {
                if (Array.isArray(params[e])) {
                    params[e].forEach(i => {
                        e + "=" + i
                    });
                }
                else {
                    return e + "=" + params[e]
                }
            });

            return "?" + stringParams.join("&")
        }

        return ""
    }
}