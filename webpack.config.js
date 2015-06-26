'use strict';
var webpack = require('webpack');

var srcPath = __dirname + '/src/';
var distPath = __dirname + '/dist/';

module.exports = {
    debug: true,
    // entry: srcPath + 'main.js',
    entry: [
      'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      srcPath + 'index.js' // Your appʼs entry point
    ],
    output: {
        path: distPath,
        publicPath: distPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!jsx?harmony' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192'} 
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}