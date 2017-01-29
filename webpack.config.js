const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

var webpackShimConfig = {
    // Remember: Only use shim config for incompatible libraries
    // the libraries below are just examples, regardless whether they are compatible or not
    shim: {
        'jquery': {
            exports: '$' // Once loaded, use the global '$' as the module value.
        },
        'bootstrap': {
            deps: ['jquery']
        }

    }
};

let config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js?/,
                loader : 'shim-loader',
                query: webpackShimConfig,
            },
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            jquery: 'node_modules/jquery/dist/jquery',
            bootstrap: 'node_modules/bootstrap/dist/js/bootstrap'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    rules: [
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.png$/,
            use: { loader: 'url-loader', options: { limit: 100000 } },
        },
        {
            test: /\.jpg$/,
            use: [ 'file-loader' ]
        }
    ]
};

module.exports = config;