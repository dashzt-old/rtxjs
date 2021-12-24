const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolveRoot = (subPath = '') =>
  path.join(__dirname, 'src/', subPath)

module.exports = {
  mode: 'development',
  entry: {
    app: resolveRoot('index.ts')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [resolveRoot(), 'node_modules']
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    hot: true,
    https: false
  }
}