const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const MODE = "development";

module.exports = {
  entry: "./src/front/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
    clean: true,
  },
  mode: MODE,
  plugins: [new MiniCssExtractPlugin({ filename: "css/style.css" })],
  watch: true,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
