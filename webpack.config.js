const path = require('path');
const webpack = require('webpack');
const Uglify = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: "./public/src/index.js",
    output: {
        path: path.join(__dirname, './public/dist'),
        publicPath: "/dist",
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: ['file-loader?name=/images/[name].[ext]'],
            exclude: /node_modules/,
            include: __dirname,
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
        }, {
            test: /\.js$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }]
    },
    plugins: [
        new Uglify(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
}

