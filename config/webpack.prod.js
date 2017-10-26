const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const CompressionPlugin = require('compression-webpack-plugin');
const ngtools = require('@ngtools/webpack');
const path = require('path');


module.exports = webpackMerge( commonConfig, {

    entry: {
        'polyfills': './src/polyfills.ts',
        'main': './src/main.aot.ts'
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '.',
        filename: '[name].js',
        chunkFilename: 'chunks/[id].chunk.js'
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            ie8: false,
            sourceMap: false,
            screw_ie8: true,
            beautify: false,
            comments: false,
            mangle: {
                screw_ie8: true
            },
            compress: {
                screw_ie8: true,
                warnings: false,
                drop_console: false,
                collapse_vars: true,
                reduce_vars: true
            },
            warnings: false
        }),

        new webpack.LoaderOptionsPlugin({
            options: {
                htmlLoader: {
                    minimize: true
                }
            }
        }),

        new ngtools.AotPlugin({
            tsConfigPath: './tsconfig-aot.json',
            entryModule: path.resolve(__dirname, '../src','app','app.module')+'#AppModule'
        }),

        new CompressionPlugin({
            regExp: /\.css$|\.js$/,
            threshold: 2 * 1024
        })
    ],

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/\.(spec|e2e)\.ts$/],
                use: ['@ngtools/webpack']
            }
        ]
    }
});
