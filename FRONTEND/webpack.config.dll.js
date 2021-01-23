const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry:{
        modules: ['react','react-dom','react-router-dom'],
    },
    output:{
        library: '[name]',
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname,'[name]-manifest.json'),
        }),
    ]
}