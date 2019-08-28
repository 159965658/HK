// 菜单.Data 参数类型
interface INavType {
    name: string,
    id: number,
    urlName: string
}
// props
interface INavProps {
    active: number,
}


// 菜单数据
const navList: INavType[] = [
    { name: '用户登录', id: 1, urlName: 'loginIndex' },
    { name: '手机验证码登录', id: 2, urlName: 'loginIndex' }
];
export {
    INavType, INavProps, navList
}