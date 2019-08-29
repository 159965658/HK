import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
// import { MAINHOST, ISMOCK, conmomPrams } from '@/config'
import { conmomPrams } from '../utils/config'
import { EnumHttp } from '@/enum';
import { ResponseBase } from './types/IApiResBase';
// import requestConfig from '@/config/requestConfig'
// import { getToken } from '@/utils/common'
// import router from '@/routers/'
// interface IQueue {
//     [key: string]: boolean,
// }
// declare type Methods = "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT"
// declare interface Datas {
//     method?: Methods
//     [key: string]: any
// }
const baseURL = '/api'// process.env.NODE_ENV === 'production' ? MAINHOST : location.origin
const token = ''// getToken()

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    // 添加全局的loading...
    // if (!Object.keys(this.queue).length) {
    //     // show loading
    // }
    // if (config.url) {
    //     this.queue[config.url] = true
    //     url = config.url;
    // }
    if (!config.baseURL) {
        config.baseURL = baseURL;
    }
    return config
}, (error: any) => {
    // tslint:disable-next-line: no-console
    console.error(error)
})
// 响应拦截
axios.interceptors.response.use((res: AxiosResponse): AxiosResponse => {
    // if (res.config.url) {
    //     this.destroy(res.config.url)
    // }
    const { data, status } = res;
    // if (status === 200 && ISMOCK) { return data } // 如果是mock数据，直接返回
    if (status === EnumHttp.success) {
        if (data.code === EnumHttp.token) {
            console.log('去登陆');
        }
        return res
    } // 请求成功
    return res
    // return this.requestFail(res) // 失败回调
}, (error: any) => {
    // if (url) {
    //     this.destroy(url)
    // }
    // tslint:disable-next-line: no-console
    console.error(error)
})
// export default HTTP;