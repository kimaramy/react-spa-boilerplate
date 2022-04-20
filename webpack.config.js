const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

const loaders = {
  html: {
    loader: 'html-loader',
  },
  babel: {
    loader: 'babel-loader',
    options: {
      // compact: false,
      cacheDirectory: !isProd,
      plugins: ['react-hot-loader/babel'],
    },
  },
  style: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
  url: {
    loader: 'url-loader',
    options: { limit: 8192 },
  },
  svg: {
    loader: '@svgr/webpack',
  },
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'eval-source-map',
  entry: {
    app: resolve(__dirname, 'src/index'), // TODO: 엔트리 바뀌면 변경
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: resolve(__dirname, 'public'),
      publicPath: '/',
    },
    hot: true,
    compress: true,
    client: {
      progress: true,
    },
    port: 3000,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    // modules: [resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname),
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [loaders.html],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [loaders.babel],
      },
      {
        test: /\.(css|scss|sass)$/,
        use: loaders.style,
      },
      {
        test: /\.(jpe?g|png|gif|bmp)$/,
        use: [loaders.url],
      },
      {
        test: /\.svg$/,
        use: [loaders.svg, loaders.url],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
      minify: {
        collapseWhitespace: true,
      },
    }),
    // Removes & Cleans dist folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    ...(isProd
      ? [
          new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
          }),
        ]
      : []),
  ],
  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserWebpackPlugin({
        parallel: true,
        terserOptions: {
          safari10: true,
        },
      }),
    ],
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: isProd ? '[name].bundle.[chunkhash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].lazy-chunk.[chunkhash].js' : '[name].lazy-chunk.js',
  },
}
