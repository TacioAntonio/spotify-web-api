module.exports = {
  entry: './lib/index',
  output: {
    library: 'spotifyWrapper',
    libraryTarget: 'umd',
    filename: 'spotifyWrapper.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
