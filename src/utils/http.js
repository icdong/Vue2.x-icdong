/*
 * @Descripttion: 全局ajax二次封装
 * @version:
 * @Author: Daito Chai
 * @Date: 2019-08-22 00:14:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-23 16:06:46
 */
import Vue from "vue";
import axios from 'axios'
// import router from "../routes";
// import store from "../store";

Vue.prototype.$http = axios;

// 配置全局token
window.routeCancel = {
    token: null,
    cancel: null
}

// 默认携带cookie
axios.defaults.withCredentials = true

//设置全局请求拦截器 在每次请求时 配置当前路由的的token
axios.interceptors.request.use(
    config => {
        if (config.cancelToken === undefined) {
            config.cancelToken = window.routeCancel.token
        }
        return config
    },
    error => {
        // 跳转error页面
        // router.push({ path: "/error" });
        return Promise.reject(error);
    }
);

// 全局响应拦截器
axios.interceptors.response.use(
    res => {
        if (res.data.code === "401") {
            // 401表示没有登录
            // 提示没有登录
            Vue.prototype.notifyError(res.data.msg);
            // 修改vuex的showLogin状态,显示登录组件
            // store.dispatch("setShowLogin", true);
        }
        if (res.data.code === "500") {
            // 500表示服务器异常
            // 跳转error页面
            // router.push({ path: "/error" });
        }
        return res;
    },
    error => {
        // 跳转error页面
        // router.push({ path: "/error" });
        return Promise.reject(error);
    }
);