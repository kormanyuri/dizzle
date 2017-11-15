/**
 * Created by zhangbin on 2017/4/1.
 */
const webpack = require('webpack');
//const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');


module.exports = {
    context: __dirname + "/src",
    entry: "./index.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs']

                }
            },
            //下面是使用 ant-design 的配置文件
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000,
                },
            },
        ]
    },
    plugins: [
        new InterpolateHtmlPlugin('production'),
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: '../public/index.html'
        }),
    ],
    output: {
        path: __dirname + '/build',
        filename: "gift_card.js"
    }
}