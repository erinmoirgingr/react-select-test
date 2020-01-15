var webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: ["./src/index", "./less/default.less"],
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    library: 'ReactSelect',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ],
      },
      {
        test: /\.less|\.css/,
        use: [
          MiniCssExtractPlugin.loader, "css-loader", "less-loader"
        ],
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.json', '.jsx', '.css', '.scss']
  },
}
