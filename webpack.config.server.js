/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const nodeExternals = require("webpack-node-externals");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/

module.exports = {
  name: "server",
  entry: {
    server: path.resolve(__dirname, "server", "server.tsx"),
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.server.json",
        },
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: [
          require.resolve('css-loader'),
          require.resolve('sass-loader')
        ]
      },
    ],
  },
  target: "node",
  node: {
    __dirname: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ context: "server", from: "views", to: "views" }],
    }),
  ],
};
