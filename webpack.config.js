module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  context: __dirname,
  entry: {
    app: ['./src/index.jsx']
  },
  output: {
    filename: '[name].js',
    path: './build',
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    port: 8086,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }
    ]
  }
}