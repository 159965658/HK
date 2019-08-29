import { AxiosRequestConfig } from "axios";

export interface IApiResBase {
    [key: string]: string
}
// export interface AxiosResponse {
//     data: {}; // 服务端返回的数据
//     status: number; // HTTP 状态码
//     statusText: string; // 状态消息
//     headers: any; // 响应头
//     config: AxiosRequestConfig; // 请求配置对象
//     request: any; // 请求的 XMLHttpRequest 对象实例
// }
export interface ResponseBase<T> {
    data: T; // 服务端返回的数据
    status: {
        code: number,
        message: string
    }
}
