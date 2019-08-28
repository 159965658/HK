import Vue from 'vue';
import App from './App.vue';
import router from './routers/';
import store from './store';
Vue.config.productionTip = false;
// import { Button } from "element-ui";
// import './assets/css/element-variables.scss';
// import lang from 'element-ui/lib/locale/lang/en';
// import locale from 'element-ui/lib/locale';

// // 设置语言
// locale.use(lang);

// 引入组件
// Vue.use(Button);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
