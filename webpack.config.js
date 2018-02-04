module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: 8080,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
    ],
  },
}