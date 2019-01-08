const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nested = require('postcss-nested')
const webpack = require('webpack')
const rrmOptions = require('./render-react-markdown.config.js')

const mode = process.env.NODE_ENV || 'development';

/*
walkAst: (ast, meta) => {
  const headingKey = ast.children.findIndex(item => {
    if (item.type === `heading` && item.depth === 1) {
      return true;
    }
  });

  if (headingKey >= 0) {
    meta.heading = ast.children[headingKey].children[0]
      && ast.children[headingKey].children[0].value;
    ast.children.splice(headingKey, 1)
  } else {
    meta.heading = false;
  }

  return ast;
}
 */

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'demo.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        exclude: /node_modules/,
        use: [
          {
            loader :  path.join(__dirname, '../lib/index.js'),
            options: rrmOptions
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [nested()]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'public/index.html')
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(mode)
    }),
  ],
  mode: mode
};
