const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
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
      template: './src/index.html'
    })
  ]
}
