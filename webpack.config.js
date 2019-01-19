const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.tsx",
  output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist")
  },

  mode: "development",

  resolve: {
    modules: [
      __dirname,
      path.resolve(__dirname, 'node_modules'),
    ],
    extensions: ['.js', '.d.ts', '.tsx', '.ts', '.jsx'],
  },

  module: {
      rules: [
          {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            exclude: /node_modules/
          },
      ]
  },

  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  },
  devServer: {
    open: false,
    port: '5000',
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true,
  }
};
