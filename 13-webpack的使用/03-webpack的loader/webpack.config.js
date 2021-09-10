
const path = require('path')  //    path   这个文件是node的文件，，，意味着需要需要引入node ,就需要执行npm init  初始化


// 设置webpack的入口文件和出口文件,,,,
//这里的配置好了后，     直接在命令窗口使用    webpack命令 就等同于  webpack ./src/main.js ./dist/bundle.js命令
module.exports = {
    entry:'./src/main.js',
    output:{
        // path需要填写一个绝对路径，，，，一定要动态获取绝对路径，，项目才好赋值，不然每次换文件夹这里都要该下
        // path.resolve(参数1，参数2) node中的方法，参数1是当前项目的路径，参数2是目标文件夹
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'dist/'  // 以后关于url的路径都会加上这个路径
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
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载图片小于limit时，会将图片编译成base64字符串形式
                            //当加载图片大于limit时，需要使用file-loader模块进行加载
                            limit: 8192,
                            name:'./img/[name]-[hash:8].[ext]'
                        }
                    }
                ]
            },
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
            }
        ]
    }
}