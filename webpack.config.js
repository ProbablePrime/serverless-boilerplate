const slsw = require('serverless-webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: slsw.lib.entries,
    resolve: {
        extensions: ['.ts'],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, '.webpack'),
        filename: '[name].js',
    },
    plugins: [new UglifyJSPlugin(), new CheckerPlugin()],
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
            },
        ],
    },
};
