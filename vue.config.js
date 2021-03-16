module.exports = {
    configureWebpack: {
        resolve: {
            alias: { //给路径起别名，如果是在html中运用，则前面还要加~  
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {
            '/api': {
                target: 'http://localhost:8848/', //这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                //在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                changOrigin: true, //允许跨域
                pathRewrite: {
                    '^/api': '' //请求的时候使用这个api就可以
                }
            }
        }
    }
}
