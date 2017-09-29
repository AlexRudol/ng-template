const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const path = require('path');

const protocol = process.env.npm_package_config_protocol;
const localhost = process.env.npm_package_config_localhost;
const localhost_port = process.env.npm_package_config_localhost_port;

var https;
https = protocol === 'https';

module.exports = webpackMerge( commonConfig, {

    entry: {
        'polyfills': './src/polyfills.ts',
        'main': './src/main.ts'
    },

    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: protocol+'://'+localhost+':'+localhost_port,
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },

    devServer: {
        host: localhost,
        port: +localhost_port,
        https: https,
        contentBase: './src',
        historyApiFallback: true,
        quiet: false,
        stats: 'minimal',
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, 'src'),
            {}
        )
    ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/\.(spec|e2e)\.ts$/],
                use: ['angular2-template-loader', 'awesome-typescript-loader', 'angular2-router-loader']
            }
        ]
    }

});
