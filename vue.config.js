/*
 * @Description: 
 * @Author: Daito Chai
 * @Date: 2021-01-10 19:45:49
 * @LastEditors: Daito Chai
 * @LastEditTime: 2021-01-17 14:53:52
 */

let global = require('./ip-server-config')
let CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let isPorduction = process.env.NODE_ENV === 'porduction'

module.exports = {
    devServer: {
        host: global.ip, //也可以直接写IP地址这样方便真机测试
        port: global.port, // 端口号
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理

        // 配置多个代理
        // proxy: {
        //   "/api": {
        //     target: "<url>",  //写地址
        //     ws: true,  // 允许跨域
        //     changeOrigin: true,  //允许跨域
        //     pathRewrite: {
        //       "^/api": ""
        //     }
        //   },
        //   "/foo": {
        //     target: "<other_url>"
        //   }
        // }
    },
    // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致
    outputDir: 'icdong',
    //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    assetsDir: "assets",
    //指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
    // indexPath: "myIndex.html",
    //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
    // 你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
    filenameHashing: false,
    //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
    lintOnSave: !isPorduction,
    /**
     * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
     *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
     *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
     *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
     * */
    productionSourceMap: false,
    plugins: [
        new CompressionPlugin({
            algorithm: 'gzip', // 使用gzip压缩
            test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i, // 匹配文件名
            filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
            minRatio: 1, // 压缩率小于1才会压缩
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
        }),
    ],
    chainWebpack: (config) => {
        if (isPorduction) {
            if (process.env.npm_config_report) {
                config.plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end();
                config.plugins.delete('prefetch')
            }
        }
    }
}
