module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  loaders: [
    { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' }
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist'
  }
}