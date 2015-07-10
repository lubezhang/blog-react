'use strict';

var webpack = require('webpack');

var srcPath = __dirname + '/src/';
var distPath = __dirname + '/dist/';

module.exports = {
    entry: srcPath + 'indexBabel.js',
    // entry: [
    //   'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
    //   'webpack/hot/only-dev-server',
    //   srcPath + 'indexBabel.js' // Your appʼs entry point
    // ],

    output: {
        path: distPath,
        publicPath: distPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
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