const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode= process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'backend/public'),
    filename: 'bundle.js',
  },
  mode: 'production',
  module : {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./backend/views/index.ejs",
    }),
  ],
  devServer: {
    open: true, // para abrir el navegador
    compress: true,
    port: 8080,
  },
};