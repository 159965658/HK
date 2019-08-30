import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';

import { getToken, removeToken, setToken } from '@/utils/auth';
// import RouteConfigImpl from '@/router/RouteRecordImpl';
import store from '@/store';
// import { getInfo, login, logout } from '@/api/user';
// import { filterAsyncRoutes } from '@/utils/permission';
// import { asyncRoutes, constantRoutes, resetRouter } from '@/router';

export default interface User {
    token: string | undefined;
    name: string;
    // routers: RouteConfigImpl[];
}

@Module({ dynamic: true, store, name: 'user' })
class UserImpl extends VuexModule implements User {
    public token: string | undefined = "1";
    public name = '';
    // public routers: RouteConfigImpl[] = [];

    @Action
    public getInfo() {
        return new Promise((resolve, reject) => {
            // getInfo().then((response) => {
            //     const data = response.data;
            //     const { name, email, gender, avatar, roles, menus } = data;
            this.SET_NAME(name);
            //     this.SET_GENDER(gender);
            //     this.SET_AVATAR(avatar);
            //     this.SET_ROLES(roles);
            //     this.SET_MENUS(menus);
            resolve();
            // }).catch((error) => {
            //     reject(error);
            // });
        });
    }

    @Action
    public logout() {
        return new Promise((resolve) => {
            // logout().then(() => {
            this.SET_TOKEN(undefined);
            removeToken();
            //     resetRouter();
            resolve();
            // });
        });
    }


    @Mutation
    private SET_TOKEN(token: string | undefined) {
        this.token = token;
    }

    @Mutation
    private SET_NAME(name: string) {
        this.name = name;
    }
}

export const UserState = getModule(UserImpl);
