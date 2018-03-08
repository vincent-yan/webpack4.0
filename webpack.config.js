const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: __dirname + '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
        inline: true,
        // hot: true,
        // contentBase: path.join(__dirname, "src"),
    },
    plugins: [
        // new webpack.optimize.ModuleConcatenationPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}