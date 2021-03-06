const path = require('path');
 
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.jsx',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js||jsx)?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        //?????loaders: [],
        // use: [
        //   'babel-loader',
        // ],
      },
      {
        // test: /\.(js||jsx)?/,
        // exclude: /node_modules/,
        // loader: 'babel-loader',
      }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
}; 




