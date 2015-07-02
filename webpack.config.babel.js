'use strict';

var webpack = require('webpack');

var srcPath = __dirname + '/src/';
var distPath = __dirname + '/dist/';

module.exports = {
    debug: true,
    entry: srcPath + 'indexBabel.js',
    output: {
        path: distPath,
        publicPath: distPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
}