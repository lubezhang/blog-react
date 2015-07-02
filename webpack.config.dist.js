'use strict';

var srcPath = __dirname + '/src/';
var distPath = __dirname + '/dist/';

module.exports = {
    debug: true,
    entry: srcPath + 'index.js',
    output: {
        path: distPath,
        publicPath: distPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'jsx?harmony' },
            { test: /\.less$/, loader: 'style!css!less!autoprefixer' },
            { test: /\.css$/, loader: 'style!css!autoprefixer' },
            { test: /\.(png|jpg)$/, loader: 'url?limit=8192'} 
        ]
    }
}