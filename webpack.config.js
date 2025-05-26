const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  mode: 'development', 

  entry: {
    main: path.resolve(__dirname, 'assets/apps/index.js'),
  },

  output: {
    path: path.resolve(__dirname, 'assets/dist'),
    filename: 'js/[name].js',
    publicPath: '/assets/dist/',
    clean: true,
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'assets'),
    },
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'media/[name][ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },

  plugins: [
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
      publicPath: '/assets/dist/',
    }),

    new BundleTracker({
      path: __dirname,                   // 🔹 Directory to write the file in
      filename: 'webpack-stats.json'     // 🔹 Only the file name
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: './assets/media', to: 'media' }, 
      ],
    }),
  ],
};
