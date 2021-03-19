//const webpack = require('webpack')

const _webpackConfig = {
    revSlider : "public/js/config-revolution.js"
}


module.exports = {

    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    
        // config.plugins.push(
        //     new webpack.ProvidePlugin({
        //         $: 'jquery',
        //         jQuery: 'jquery'
        //     }),
        // )

        
        // config.resolve.alias = {
        //     ...config.resolve.alias,
        //     ..._webpackConfig
        // }

        // Important: return the modified config
        return config
    },

}