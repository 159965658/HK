<script lang="tsx">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class LoginUser extends Vue {
  protected render() {
    return (
      <div class="login-user">
        <form></form>
      </div>
    );
  }
}
</script>