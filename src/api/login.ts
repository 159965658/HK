import { IApiResBase, ResponseBase } from './types/IApiResBase';
import axios from "axios";
// import HTTP from "./request";
export interface IApiLogin {
    mobile: string,
    password: string
}

/**
 * Login
 * 登录
 */
const Login: IApiResBase = { login: 'login', login1: 'login' }
// 获取用户api
export function ApiGetUser<T>(params: IApiLogin) {
    const url = '/login/pwd'
    // HTTP.queue[url] = false
    return axios.post<ResponseBase<T>>(url, params)
        .then(res => res.data)
    // tslint:disable-next-line: no-console
    // .catch(err => { console.error(err); return { code: 1000, message: err } })
}
