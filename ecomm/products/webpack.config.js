const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {

                // this is the way we'll export the whole file
                // './ProductsIndex': './src/index'

                // this is the way we'll export the whole file but here we have the mount function
                './ProductsIndex': './src/bootstrap'

            },
            shared: {
                faker: {
                    singleton:true
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}