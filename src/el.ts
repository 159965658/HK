import Vue from 'vue';
// import { Input, Form, FormItem, Button, Message, MessageBox } from "element-ui";
// import * as e from 'element-ui/types'
// Vue.use(Form);
// Vue.use(Input);
// Vue.use(FormItem);
// Vue.use(Button);
// VueMessageBox);
import Element from "element-ui";
Vue.use(Element);
// Vue.prototype.$Message = MessageBox;
// Vue.extend(MessageBox);

// 1. 确保在声明补充的类型之前导入 'vue'

// 2. 定制一个文件，设置你想要补充的类型
//    在 types/vue.d.ts 里 Vue 有构造函数类型
// 声明全局方法
// declare module 'vue/types/vue' {
//     interface Vue {
//         $Message: MessageBox,
//     }
// }
// tslint:disable-next-line:no-string-literal
// const Plugin = (vue: any) => {
//     vue.$alert = MessageBox;
//     Object.defineProperties(Vue.prototype, {
//         alert: {
//             get() {
//                 return MessageBox
//             }
//         },
//         $alert: {
//             get() {
//                 return MessageBox
//             }
//         },
//     })
// }
// Vue.use(Plugin);