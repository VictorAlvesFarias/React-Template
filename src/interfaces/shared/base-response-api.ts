export interface BaseResponseApi<T> {
    res: T
    errors: string[] | null | undefined
    status: number
}