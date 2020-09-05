import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import http from './libs/http'
Vue.prototype.$http = http

// UI配置
Vue.use(ElementUI)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#icdong");
