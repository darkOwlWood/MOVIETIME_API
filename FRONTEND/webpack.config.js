const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMiniExtractPlugin = require('mini-css-extract-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname,'src','index.js'),
    output: {
        publicPath: '/',
        filename: '[fullhash]-bundle.js',
        path: path.resolve(__dirname,'dist'),
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module:{
        rules:[
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(s?css)$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gift)$/,
                use:{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        fallback: 'file-loader',
                    }
                }
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html'),
        }),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname,'modules-manifest.json'),
        }),
        new AddAssetHtmlWebpackPlugin({
            publicPath: '/',
            filepath: path.resolve(__dirname,'dist','modules.js'),
        }),
    ],
};