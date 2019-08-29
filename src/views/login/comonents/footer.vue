<script lang="tsx">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Footer extends Vue {
  public render() {
    return (
      <div class="form-footer">
        <p>忘记密码</p>
        <p>新用户注册</p>
      </div>
    );
  }
}
</script>
<style lang="scss" scoped>
.form-footer {
  @include flex(row, space-between);
  color: $default-color;
}
</style>