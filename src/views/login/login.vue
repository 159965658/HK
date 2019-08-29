<script lang="tsx">
import { Vue, Component, Watch } from "vue-property-decorator";
import NavCom from "./comonents/nav";
import { INavProps, navList } from "./comonents/navTypes";
import { Route } from "vue-router";
import LoginForm from "./comonents/loginForm.vue";
@Component({
  components: {
    NavCom,
    LoginForm
  }
})
export default class LoginIndex extends Vue {
  public navProp: INavProps = {
    active: 1
  };
  public navList = navList;
  public com: any = LoginForm;
  public created() {
    this.setData(this.$route);
  }
  public setData(val: Route): void {
    const {
      params: { id }
    } = val;
    if (id) {
      this.navProp.active = parseInt(id, 10);
    }
  }
  protected render() {
    const comNav = this.navList.find(p => this.navProp.active === p.id);
    const current = comNav && comNav.component;
    return (
      <div class="login-index main-con">
        <div class="login-form">
          <NavCom props={this.navProp}></NavCom>
          <keep-alive>{current ? <current></current> : ""}</keep-alive>
        </div>
      </div>
    );
  }
  @Watch("$route")
  private onRouteChange(val: Route, oldVal: Route) {
    const {
      params: { id }
    } = val;
    const mode = this.navList.find(p => p.id.toString() === id);
    if (mode) {
      this.setData(val);
    }
  }
}
</script>

<style lang="scss" scoped>
.login-index {
  height: 600px;
  @include img("../../assets/img/login_bg.png");
  @include flex(row, flex-end);
  .login-form {
    width: 380px;
    height: 423px;
    @include border(1px, 10px);
  }
}
</style>