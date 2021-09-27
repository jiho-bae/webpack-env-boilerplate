const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MODE = 'development';

module.exports = {
  entry: './frontend/index.ts',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'frontend/dist'),
    filename: 'js/main.js',
    clean: true,
  },
  mode: MODE,
  plugins: [
    new HtmlWebpackPlugin({ template: './frontend/index.html' }),
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
  ],
  devtool: MODE === 'development' ? 'source-map' : '',
  module: {
    rules: [
      { test: /\.ts?$/, use: ['ts-loader'], exclude: /node_modules/ },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: { port: 8000 },
};
