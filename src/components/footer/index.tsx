import { Vue, Component } from "vue-property-decorator";
import './index.scss'
@Component
export default class Footer extends Vue {
    protected render() {
        return (<div class='footer'></div>)
    }
}