const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: ['babel-polyfill',
      'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr&reload=true',
      'webpack/hot/dev-server',
      './src/index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname + '/public'),
    filename: "bundle.js",
    publicPath: "/public"
  },

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      }, {
        test: /\.woff(\?.*)?$/,
        loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.woff2(\?.*)?$/,
        loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
      }, {
        test: /\.otf(\?.*)?$/,
        loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
      }, {
        test: /\.ttf(\?.*)?$/,
        loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?.*)?$/,
        loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]'
      }, {
        test: /\.svg(\?.*)?$/,
        loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
      }, {
        test: /\.png(\?.*)?$/,
        loader: 'url-loader?prefix=images/&name=[path][name].[ext]&limit=8096'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}