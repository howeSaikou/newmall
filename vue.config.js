// 导出
module.exports = {
    configureWebpack: {
        // 路径相关
        resolve: {
            // 配置别名
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'views': '@/views',
                'network': '@/network',
                'router': '@/router',
                'components': '@/components/'
            }
        }
    }
}