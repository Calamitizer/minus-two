(() => {
    'use strict';

    const webpack = require('webpack');
    const path = require('path');

    const config = {
        mode: 'development',
        entry: ['./client/src/index.tsx'],

        devtool: 'source-map',

        output: {
            filename: 'mtwo.min.js',
            publicPath: '',
            path: path.resolve(__dirname, 'client/www'),
        },

        devServer: {
            port: 4345,
            historyApiFallback: true,
            inline: true,
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                    exclude: /node_modules/
                    // include: path.resolve(__dirname, 'client/src'),
                },
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    loader: 'source-map-loader',
                    // include: path.resolve(__dirname, 'client/src'),
                },
            ],
        },

    };

    module.exports = config;

})();
