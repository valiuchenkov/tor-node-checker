const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: "./src/index.jsx",
  
  output: {
    filename: "index.js",
    path: __dirname + "/build"
  },

  devtool: "cheap-source-map", // eval is not allowed for extensions

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "index.html" },
        { from: "src/manifest.json", to: "manifest.json" },
        { from: "src/assets/images/icons", to: "icons" }
      ]
    })
  ],

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [ "@babel/preset-react", { runtime: "automatic" } ]
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      },
      {
        test: /\.png$/,
        loader: "file-loader"
      }
    ]
  }
}
