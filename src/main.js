/*
 * @Author: your name
 * @Date: 2020-11-23 15:50:33
 * @LastEditTime: 2020-11-23 16:03:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue3.0-icdong\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import http from './utils/http'
Vue.prototype.$http = http

// if (process.env.NODE_ENV !== 'porduction') require('./mock')

// UI配置
Vue.use(ElementUI)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#icdong");
