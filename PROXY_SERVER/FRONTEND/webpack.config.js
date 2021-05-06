const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

const envValues = dotenv.config().parsed;
const envObj = Object.keys(envValues).reduce((accu, next) => {
    accu[`process.env.${next}`] = JSON.stringify(envValues[next]);
    return accu;
}, {});

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: 'bundle-[fullhash].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(s?css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gift)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            fallback: 'file-loader',
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin(envObj),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
        }),
        new webpack.DllReferencePlugin({
            manifest: path.join(__dirname, 'modules-manifest.json'),
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath: path.join(__dirname, 'dist', 'modules.js'),
        })
    ],
    devServer: {
        historyApiFallback: true,
    }
}