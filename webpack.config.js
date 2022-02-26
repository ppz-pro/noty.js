const { resolve } = require('path')

module.exports = {
  mode: "production",
  entry: {
    noty: './src/index.js',
  },
  target: ['web', 'es5'],
  output: {
    path: resolve(__dirname, 'dist/'),
    filename: '[name].min.js',
    library: {
      name: 'noty',
      type: 'umd',
      umdNamedDefine: true,
      export: "default",
    },
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        // loader: 'style-loader!css-loader!'
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
}
