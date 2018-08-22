const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'app.js'
  },
  plugins: [
    new UglifyJsPlugin({
      parallel: 4,
      uglifyOptions: {
        ie8: false,
        output: {
          comments: false,
          beautify: false
        },
        warnings: false
      }
    })
  ],
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
            plugins: ['babel-plugin-transform-runtime']
          }
        }
      }
    ]
  }
};