import axios, { Axios, AxiosHeaders, AxiosProgressEvent, AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'
import { useErrors } from '../utils/hooks/errors-hooks'
import { Axios as IAxios } from '../interfaces/shared/axios'
import { AUTH } from '../config/auth-config'

export interface Route {
    api: string
    href: string
    params?: any
}

export abstract class BaseService {
    protected privateToken: string
    protected axios: Axios
    protected config: () => AxiosRequestConfig

    constructor(config?: AxiosRequestConfig, token?: any) {
        this.axios = axios
        this.privateToken = token;
        this.config = () => {
            return config ?? {
                headers: {
                    Authorization: this.privateToken ?? AUTH.DEFAULT_AUTHORIZATION_TOKEN()
                }
            }
        }
    }

    protected post<T>(
        route: Route,
        body: any,
        progressEventCallback?: ((progressEvent: AxiosProgressEvent) => void),
        config?: AxiosRequestConfig
    ) {
        const result = axios.post(
            this.route(route),
            body,
            {
                ...this.config(),
                onUploadProgress: progressEventCallback
            }
        )
            .then((response: IAxios<T>) => {
                return response.data
            })
            .catch((error) => {
                useErrors(error)
                throw error
            })

        return result
    }

    protected patch<T>(
        route: Route, 
        body: any, 
        config?: AxiosRequestConfig
    ) {
        const result = axios.patch(this.route(route), body, { ...this.config(), ...config })
            .then((response: IAxios<T>) => {
                return response.data
            })
            .catch((error) => {
                useErrors(error)
                throw error
            })

        return result
    }

    protected get<T>(
        route: Route, 
        config?: AxiosRequestConfig
    ) {
        const result = axios.get(this.route(route), { ...this.config(), ...config })
            .then((response: IAxios<T>) => {
                return response.data
            })
            .catch((error) => {
                useErrors(error)
                throw error
            })

        return result
    }

    protected put<T>(
        route: Route, 
        body: any, 
        config?: AxiosRequestConfig
    ) {
        const result = axios.put(this.route(route), body, { ...this.config(), ...config })
            .then((response: IAxios<T>) => {
                return response.data
            })

        return result
    }

    protected delete<T>(
        route: Route, 
        config?: AxiosRequestConfig
    ) {
        const result = axios.delete(this.route(route), { ...this.config(), ...config })
            .then((response: IAxios<T>) => {
                return response.data
            })

        return result
    }

    private route(
        route: Route
    ) {
        const result = `${route.api}${route.href}${this.urlParams(route.params)}`

        return result
    }

    protected urlParams(params) {
        if (params) {
            const keys = Object.keys(params)
            if (keys.length > 0) {
                const stringParams = keys.map(e => {
                    if ((typeof params[e] == "string" && params[e] != null && params[e]?.trim() != "")) {
                        if (Array.isArray(params[e])) {
                            params[e].forEach(i => {
                                e + "=" + i
                            });
                        }
                        else {
                            return e + "=" + params[e]
                        }
                    }
                    else {
                        if (Array.isArray(params[e])) {
                            params[e].forEach(i => {
                                e + "=" + i
                            });
                        }
                        else {
                            return e + "=" + params[e]
                        }
                    }
                });

                return "?" + stringParams.filter(e => e != null).join("&")
            }
        }

        return ""
    }
}
