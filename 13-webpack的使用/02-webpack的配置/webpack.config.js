
const path = require('path')  //    path   这个文件是node的文件，，，意味着需要需要引入node ,就需要执行npm init  初始化


// 设置webpack的入口文件和出口文件,,,,
//这里的配置好了后，     直接在命令窗口使用    webpack命令 就等同于  webpack ./src/main.js ./dist/bundle.js命令
module.exports = {
    entry:'./src/main.js',
    output:{
        // path需要填写一个绝对路径，，，，一定要动态获取绝对路径，，项目才好赋值，不然每次换文件夹这里都要该下
        // path.resolve(参数1，参数2) node中的方法，参数1是当前项目的路径，参数2是目标文件夹
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}