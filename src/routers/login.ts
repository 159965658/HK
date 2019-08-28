import { layzLoading } from "./layzLoading";
const url = 'login/'
const login = [
    {
        path: '/login/',
        component: layzLoading(`${url}index`), // 登录主页
        children: [
            {
                path: ':id?',
                name: 'loginIndex',
                component: layzLoading(`${url}login`)
            }
        ]
    },
];
export default login;
