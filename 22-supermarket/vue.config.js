module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'view': '@/view',
                'components':'@/components'
            }
        }
    }
}
