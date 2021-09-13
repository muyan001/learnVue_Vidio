
const uglifyjsWebpackPlugin = require('html-webpack-plugin')  // 将前端文件进行压缩
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')


// 设置webpack的入口文件和出口文件,,,,
// 这里的配置好了后，     直接在命令窗口使用    webpack命令 就等同于  webpack ./src/main.js ./dist/bundle.js命令
module.exports = webpackMerge.merge(baseConfig, {
    // 插件是中括号
    plugins:[

        // 开发阶段不建议使用丑化压缩代码，
        // 生产环境打包的时候再使用
        new uglifyjsWebpackPlugin()   // 将文件进行压缩  脚手架本身自带压缩插件
    ]
})

