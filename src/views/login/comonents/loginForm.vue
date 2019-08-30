
<template>
  <div>
    <el-form
      :labelPosition="labelPosition"
      ref="loginForm"
      :rules="rules"
      :model="formLabelAlign"
      class="form"
    >
      <el-form-item prop="phone">
        <el-input
          prefix-icon="my-iconshouji"
          v-model.number="formLabelAlign.phone"
          placeholder="请输入手机号"
        >
          <Icon slot="prefix" name="my-iconshouji"></Icon>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input v-model="formLabelAlign.pwd" type="password" placeholder="密码">
          <Icon slot="prefix" name="my-iconmima"></Icon>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')" class="btn-w">登录</el-button>
      </el-form-item>
      <Footer></Footer>
    </el-form>
  </div>
</template>


<script lang="ts">
interface IFromModel {
  phone: string;
  pwd: string;
}
interface ILoginRes {
  data: string;
}
import { Component, Vue } from "vue-property-decorator";
import { Icon } from "@/components/";
import Footer from "./footer.vue";
import { PhoneRules, PwdRules } from "@/validators/";
// import { HTTP } from "@/utils/request";
import { ApiGetUser } from "@/api/login";
import { EnumHttp } from "../../../enum";
import { UserInfo } from "@/types/user/";
import { UserState } from "@/store/modules/User";
@Component({
  components: {
    Icon,
    Footer
  }
})
export default class LoginForm extends Vue {
  public labelPosition: string = "left";

  public formLabelAlign: IFromModel = {
    phone: "",
    pwd: ""
  };
  public rules = {
    phone: PhoneRules,
    pwd: PwdRules
  };
  get token() {
    return UserState.token;
  }
  /**
   * submitForm
   * 提交表单
   */
  public submitForm(formName: string) {
    console.log(this.token);
    const loginForm: HTMLFormElement = this.$refs[formName] as HTMLFormElement;
    loginForm.validate(async (valid: any) => {
      if (valid) {
        const { phone, pwd } = this.formLabelAlign;
        // alert("submit!");
        const res = await ApiGetUser({
          mobile: phone,
          password: pwd
        });
        if (res.status.code !== EnumHttp.success) {
          this.$message.error("用户名或者密码错误");
          return false;
        }
        // HTTP.request({ url: loginUrl.login });
      } else {
        return false;
      }
    });
  }
  /**
   * LoginOk
   * 登录成功
   */
  public LoginOk(user: UserInfo) {}
}
</script>


<style lang="scss" scoped>
@import url("./form.scss");
</style>