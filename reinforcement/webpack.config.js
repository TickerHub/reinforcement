const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:  './client/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: 'auto',
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') })],
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
      },
      allowedHosts: 'all',
      proxy: {
        '/api': {
          target: 'http://localhost:8080',
          router: () => 'http://localhost:3000',
        }
      }
    },
    module: {
      rules: [
            {
              test: /\.(mov|mp4)$/,
              loader: "file-loader",
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },
            {
              test: /.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              },
            },
            {
              test: /.(css|scss)$/,
              exclude: [/node_modules/, /client\/stylesheets\/modules/],
              use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
              test: /.(css|scss)$/,
              include: [/client\/stylesheets\/modules/],
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  },
                },
                'sass-loader'],
            },
        ],
    }
};