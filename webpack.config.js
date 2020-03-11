const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode:'development',
    entry:{
        vue:'./src/vue.js', //入口
    },
    //启动server
    devServer:{
        contentBase:'./dist',
        open:true
    },

    output: {
        //输出文件相关的配置
        path: path.join(__dirname, './dist'),//指定打包的文件输出到哪个目录
        filename: 'bundle.js'//指定输出的文件名称
    },

    plugins: [
        new HtmlWebpackPlugin({
          template:path.join(__dirname,'./dist/index.html'),    //指定模版页面生成内存中的hmtl
          filename:'index.html'   //指定生成的页面名称
        })
      ]


}