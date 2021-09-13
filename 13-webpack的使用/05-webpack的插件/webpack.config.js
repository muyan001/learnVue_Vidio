
const path = require('path')  //    path   这个文件是node的文件，，，意味着需要需要引入node ,就需要执行npm init  初始化
const webpack = require('webpack')   // 引入横幅插件
const htmlWebpackPlugin = require('html-webpack-plugin') // 将html文件打包
const uglifyjsWebpackPlugin = require('html-webpack-plugin')  // 将前端文件进行压缩


// 设置webpack的入口文件和出口文件,,,,
//这里的配置好了后，     直接在命令窗口使用    webpack命令 就等同于  webpack ./src/main.js ./dist/bundle.js命令
module.exports = {
    entry:'./src/main.js',
    output:{
        // path需要填写一个绝对路径，，，，一定要动态获取绝对路径，，项目才好赋值，不然每次换文件夹这里都要该下
        // path.resolve(参数1，参数2) node中的方法，参数1是当前项目的路径，参数2是目标文件夹
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        // publicPath:'dist/'  // 以后关于url的路径都会加上这个路径    --- 使用html-webpack-plugin插件后，该插件会自动加上这个参数，这个参数就多余了
    },
    // mode:'production',// 设置mode
    // 配置loader
    module: {
        rules: [
            {
                test: /\.css$/i,
                // css-loader 只负责进行加载
                // style-loader负责将样式添加到DOM中
                //使用多个loader，使用顺序是从右到左
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                use:[
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            },
            // {
            //     test: /\.(png|jpg|gif|jpeg)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 // 当加载图片小于limit时，会将图片编译成base64字符串形式
            //                 //当加载图片大于limit时，需要使用file-loader模块进行加载
            //                 limit: 8192,
            //                 name:'./img/[name]-[hash:8].[ext]'
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.m?js$/,
                //exclude 排除
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test:/\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    //解决runtime-only的问题
    resolve:{
        // alias:起别名
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    // 插件是中括号
    plugins:[
        new webpack.BannerPlugin('版权归xx所有'),   // 这个插件用不起
        new htmlWebpackPlugin(
            {
            template:'index.html'      //这个对象参数，代表按照index的模板生成
        }
        ),
        // 开发阶段不建议使用丑化压缩代码，打包的时候再使用
        // new uglifyjsWebpackPlugin()   // 将文件进行压缩  脚手架本身自带压缩插件

    ],

    // 本地调试只是在开发阶段使用，在
    // 配置本地调试的服务器（在不打包的情况下，更改代码，查看代码效果是否正确）
    devServer:{
        // contentBase:'./dist',  // 配置的文件夹代表要监听哪个文件
        // online:true  // 是否进行实时监听
        watchFiles:['./dist'],
        liveReload:true
    }



}