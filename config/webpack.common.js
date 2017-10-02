const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'polyfills']
        }),

        new webpack.LoaderOptionsPlugin({
            options: {
                tslint: {
                    emitErrors: false,
                    failOnHint: false
                }
            }
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })

    ],

    module: {
        rules: [
            { test: /\.html$/, loader: 'raw-loader' },

            // Images and fonts
            {
                test: /\.(svg|woff|woff2|ttf|eot)$/,
                use: [{ loader: 'file-loader', options: { name: 'assets/fonts/[name].[ext]' } }]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{ loader: 'url-loader', options: { limit: 1024, name: 'assets/images/[name].[ext]' } }]
            },

            // Styles
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'to-string-loader', 'css-loader' ]
                })
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 'to-string-loader', 'css-loader' ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'to-string-loader',
                    'css-loader',
                    { loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                            require('postcss-smart-import'),
                            require('autoprefixer')({
                                browsers: ['last 2 version', 'ie 11']
                            })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
};
