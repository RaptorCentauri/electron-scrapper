const path = require('path');

let DIST_DIR = path.resolve(__dirname, 'dist');
let SRC_DIR = path.resolve(__dirname, 'src');

let config = {
    devtool: 'eval',
    target: 'electron-renderer',
    entry: ['babel-polyfill', SRC_DIR + '/app/index.js'],
    output: {
        path:DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015', 'stage-2' ]
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }


};

module.exports = config;