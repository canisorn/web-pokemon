var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        jsWeb: path.join(__dirname, 'src/js', 'jsWeb.js')
    },
    module: {
        loaders: [
            {//ใช้ได้กับทุกไฟล์ที่เป็น .js
                test: /\.js$/,  
                include: path.join(__dirname, 'src/js'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
			{ test: /\.css$/,
			  include: path.join(__dirname, 'src/css'),
			  loader: "style-loader!css-loader" 
			 },
			 { test: /\.(png|jpg|jpeg|gif|woff)$/, 
				 include: path.join(__dirname, 'src/image'),
				 loader: 'url-loader?limit=8192' }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: "jsWeb.js"
    },
	devServer: {
        historyApiFallback: true,
        inline: true
    }
};

module.exports = config;