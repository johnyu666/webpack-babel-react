const path = require('path');

module.exports = {
  mode:'none',
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer:{contentBase:'./dist',inline:true},
  module: {
       rules: [
           {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                              presets: ['env','react']
                        }
            }
          }
      ]
  }


};


