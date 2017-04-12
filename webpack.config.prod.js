const HtmlPlugin = require('html-webpack-plugin')
const HtmlInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
      {
        test: /\.png$/,
        use: ['url-loader']
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ['file-loader']
      }
    ]
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
      inlineSource: '.(js|css)$',
      minify: {
        collapseWhitespace: true,
        maxLineLength: 80,
        removeComments: true
      }
    }),
    new HtmlInlineSourcePlugin(),
    new ExtractTextPlugin('[contenthash].css')
  ]
}
