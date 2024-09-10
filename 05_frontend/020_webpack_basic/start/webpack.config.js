const path = require("path");

module.exports = {
  mode: "development", // 本番用ならproduction
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    port: 9000,
    open: true,
    static: {
      // サーバーの対象のディレクトリ
      directory: path.resolve(__dirname, "dist"),
    },
  },
};
