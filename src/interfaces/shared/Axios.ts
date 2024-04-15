import { AxiosResponse } from "axios";

export interface Axios<T> extends AxiosResponse<T,any> {

}