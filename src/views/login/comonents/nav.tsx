import { Vue, Component, Prop } from "vue-property-decorator";

import './nav.scss';
import { INavType, navList } from "./navTypes";
@Component
export default class LoginNav extends Vue {

    public navList: INavType[] = navList;

    @Prop(Number)
    public active!: number;
    constructor(
        // private router: VueRouter
    ) { super() }
    /**
     * clickLi 点击li事件
     */
    public clickLi(item: INavType): void {
        const { params } = this.$route
        if (item.id.toString() !== params.id) {
            this.$router.push({
                name: item.urlName,
                params: {
                    id: item.id.toString()
                }
            })
        }
    }
    protected render() {
        return (
            <ul class='login-nav'>
                {this.navList.map((item) =>
                    <li key={item.id}
                        class={item.id === this.active ? 'active' : ''}
                        onClick={() => this.clickLi(item)}>{item.name}</li>
                )}
            </ul>
        );
    }
}