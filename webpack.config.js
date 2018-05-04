//webpack.config.js
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [{ loader: 'url-loader', options: { limit: 2048 } }]
            }
        ]
    },
    resolve: {  //导入的时候不用写拓展名
        extensions: [' ', '.js', '.json', '.vue', '.scss', '.css']
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,//防止重复保存频繁重新编译,300ms内重复保存不打包
        poll: 1000  //每秒询问的文件变更的次数
    },
    devServer: {
        contentBase: './dist',
        host: "127.0.0.1",
        port: 9090,
        inline: true
    },

    plugins: [
        // vue-loader
        new VueLoaderPlugin()
    ]
}