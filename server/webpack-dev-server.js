const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevConfig = require('../webpack.dev.config.js')
const path = require('path')


const configureDevServer = (app) => {
    const compiler = webpack(webpackDevConfig);
    app.use(webpackDevMiddleware(compiler, {
        // all options optional

        noInfo: true,
        // display no info to console (only warnings and errors)

        quiet: false,
        // display nothing to the console

        //lazy: true,
        // switch into lazy mode
        // that means no watching, but recompilation on every request

        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
        // watch options (only lazy: false)

        path: path.resolve(__dirname + '/public'),

        publicPath: "/public",
        // public path to bind the middleware to
        // use the same as in webpack

        headers: {
            "X-Custom-Header": "yes"
        },
        // custom headers

        stats: {
            colors: true
        },

        hot: true,
        // options for formating the statistics
    }));
    app.use(webpackHotMiddleware(compiler, {
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat: 10 * 1000,
    }))
}

module.exports = configureDevServer