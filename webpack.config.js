const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "boundle.js",
    path: path.resolve("dist"),
  },
  devServer: {
    contentBase: "./dist",
    port: 8080,
    progress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      hash: true,
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
        },
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: 'font/[name].[md5:hash:hex:7].[ext]'
          },
        },
      },
      {},
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js", // 'vue/dist/vue.common.js' for webpack 1
    },
  },
};
