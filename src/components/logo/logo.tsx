import { Vue, Component } from "vue-property-decorator";
import './logo.scss';
@Component
export default class AppLogo extends Vue {
     public functional: boolean = true;
     protected render() {
          return (
               <div class="logo">
                    <div class="f-title">科技 融通 创新 求实</div>
                    <router-link to="/" tag="div" class='title'>全国初级农产品产销对接公益服务平台</router-link>
               </div>);
     }
}

