module.exports = {
  entry: './client/index.js',
  output: {
    filename: './bundle.js'
  },
  watch: true,
  module: {
    rules: [
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    },{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: { 
        loader: 'babel-loader',
        query: {
          presets: ['react']
      }
      } 
    }]
  }
};