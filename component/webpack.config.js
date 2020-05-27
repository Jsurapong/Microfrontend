const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3003,
  },
  output: {
    publicPath: "http://localhost:3003/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        loader: "less-loader", // compiles Less to CSS
        options: { lessOptions: { javascriptEnabled: true } },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "component",
      remoteType: "global",
      library: { type: "var", name: "component" },
      filename: "remoteEntry.js",
      exposes: {
        Table: "./src/Table",
        Button: "./src/Button",
        Input: "./src/Input",
        InputNumber: "./src/InputNumber",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
