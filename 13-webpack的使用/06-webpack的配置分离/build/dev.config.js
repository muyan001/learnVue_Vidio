const baseConfig = require('./base.config')
const webpackMerge = require('webpack-merge')


// 设置webpack的入口文件和出口文件,,,,
//这里的配置好了后，     直接在命令窗口使用    webpack命令 就等同于  webpack ./src/main.js ./dist/bundle.js命令

module.exports = webpackMerge.merge(baseConfig,{
    // 本地调试只是在开发阶段使用，在
    // 配置本地调试的服务器（在不打包的情况下，更改代码，查看代码效果是否正确）
    devServer:{
        // contentBase:'./dist',  // 配置的文件夹代表要监听哪个文件
        // online:true  // 是否进行实时监听
        watchFiles:['./dist'],
        // liveReload:true
    }
})


