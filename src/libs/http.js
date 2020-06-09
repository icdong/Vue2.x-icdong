/*
 * @Descripttion: 全局ajax二次封装
 * @version:
 * @Author: Daito Chai
 * @Date: 2019-08-22 00:14:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-08 23:03:11
 */
import axios from 'axios'
import global from '../../ip-server-config'

const baseUrl = `${global.serverUrl}:${global.port}`

// 配置全局token
window.routeCancel = {
    token: null,
    cancel: null
}

// 配置请求报文头
const headers = {
    'Content-Type': 'text/html;charset:utf-8',
}

// 默认携带cookie
axios.defaults.withCredentials = true

//设置请求拦截器 在每次请求时 配置当前路由的的token
axios.interceptors.request.use(config => {
    if (config.cancelToken === undefined) {
        config.cancelToken = window.routeCancel.token
    }
    return config
}, err => {
    return Promise.reject(err)
})

class http {
    /**
     * url: 请求URL
     * parame: 请求参数
     * otherConfig: 其他配置项
     * Created by icdong on 2019-08-23
     */
    static get(url, parame, otherConfig) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                withCredentials: true,
                headers,
                url: `${baseUrl}${url}`,
                parame,
                ... otherConfig
            }).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    }

    /**
     * url: 请求URL
     * parame: 请求参数
     * otherConfig: 其他配置项
     * Created by icdong on 2019-08-23
     */
    static post(url, parame, otherConfig) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                withCredentials: true,
                headers,
                url: `${baseUrl}${url}`,
                data: parame,
                ...otherConfig
            }).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    }

}

export default http
