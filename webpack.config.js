var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        hello: path.join(__dirname, 'src/js', 'hello.js'),
    },
    module: {
        loaders: [
            {//����Ѻ�ء������� .js
                test: /\.js$/,  
                include: path.join(__dirname, 'src/js'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: "hello.js"
    },
	devServer: {
        historyApiFallback: true,
        inline: true
    }

};

module.exports = config;