import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Cookies from 'js-cookie';

import store from '@/store';
import Sidebar from '@/store/types/Sidebar';

export default interface App {
    sidebar: Sidebar;
    device: string;
    size: string;
}

@Module({ dynamic: true, store, name: 'app' })
class AppImpl extends VuexModule implements App {
    public sidebar = new Sidebar(true);
    public device: string = 'desktop';
    public size: string = Cookies.get('size') || 'medium';

    @Action
    public toggleSideBar(withoutAnimation: boolean) {
        this.TOGGLE_SIDEBAR(withoutAnimation);
    }

    @Mutation
    private TOGGLE_SIDEBAR(withoutAnimation: boolean) {
        this.sidebar.opened = !this.sidebar.opened;
        this.sidebar.withoutAnimation = withoutAnimation;
        if (this.sidebar.opened) {
            Cookies.set('sidebarStatus', '1');
        } else {
            Cookies.set('sidebarStatus', '0');
        }
    }

}

export const AppState = getModule(AppImpl);
