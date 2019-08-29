<template>
  <div class="phone-form">
    <el-form class="form">
      <el-form-item>
        <el-input prefix-icon="my-iconshouji" placeholder="请输入手机号">
          <Icon slot="prefix" name="my-iconshouji"></Icon>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="验证码">
          <Icon slot="prefix" name="my-iconmima"></Icon>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"  class="btn-w">登录</el-button>
      </el-form-item>
      <Footer></Footer>
    </el-form>
  </div>
</template>

<script lang='tsx'>
import Vue from "vue";
import Component from "vue-class-component";
import Footer from "./footer.vue";
import { Icon } from "@/components/index";
@Component({
  components: {
    Footer,
    Icon
  }
})
export default class PhoneForm extends Vue {}
</script>
 <style lang="scss" scoped>
@import url("./form.scss");
</style>