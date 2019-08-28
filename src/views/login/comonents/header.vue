
<script lang="tsx">
import { Vue, Component } from "vue-property-decorator";
import { AppLogo } from "@/components/";
@Component({
  components: { AppLogo }
})
export default class LoginHeader extends Vue {
  protected render() {
    return (
      <div class="login-header">
        <div class="main-con">
          <AppLogo></AppLogo>
          <p>进入网站首页</p>
        </div>
      </div>
    );
  }
}
</script>
<style lang="scss" scoped>
.login-header {
  @include bb();
  padding: 20px 0;
  min-width: $min-width;
  .main-con {
    @include flex(row, space-between);
    @include font($default-color);
    @include cur;
  }
}
</style>