'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
    entry: `${__dirname}/src/index.js`,
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'standard-loader',
            exclude:/node_modules/
        },
        {
          test: /\.css$/,
          loader: 'css-loader?modules,localIdentName=[hash:base64]',
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new DashboardPlugin()
    ]
}

