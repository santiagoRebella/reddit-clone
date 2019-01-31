const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map', // https://webpack.js.org/configuration/devtool/
  devServer: {
    inline: true,
    contentBase: 'public',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        },
        {
          loader: "css-loader" // translates CSS into CommonJS
        },
        {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.css$/,
        use: ["style", "css"]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, 'src/assets/favicons'), to: '' },
      { from: path.resolve(__dirname, 'src/assets/logo-wide.svg'), to: 'assets' },
      { from: path.resolve(__dirname, 'src/index.html'), to: 'index.html' }
    ], { ignore: []})
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      core: path.resolve(__dirname, 'src/core/'),
      style: path.resolve(__dirname, 'src/style/')
    }
  }
};





