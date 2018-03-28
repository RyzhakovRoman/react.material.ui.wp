const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
        })
    ]
};