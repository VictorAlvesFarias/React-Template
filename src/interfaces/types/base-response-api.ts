export interface BaseResponseApi<T> {
    errors: any
    sucess:boolean
    pages:number
    current:number
    data: T 
}