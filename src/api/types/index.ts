// import { AxiosResponse, AxiosRequestConfig } from 'axios'

// export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> { }

// export interface Axios {
//     request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>;

//     get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

//     delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

//     head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

//     options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

//     post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;

//     put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;

//     patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;
// }
// export interface AxiosInstance extends Axios {
//     <T>(config: AxiosRequestConfig): AxiosPromise<T>;
//     <T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
// }