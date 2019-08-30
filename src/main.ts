import Vue from 'vue';
import App from './App.vue';
import router from './routers/';
import store from './store/';
import './api/request'
Vue.config.productionTip = false;
import "./el";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

