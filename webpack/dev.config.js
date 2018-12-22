require('@babel/polyfill');

// Webpack config for development
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

const helpers = require('./helpers');

const assetsPath = path.resolve(__dirname, '../static/dist');
const host = process.env.HOST || 'localhost';
const port = +process.env.PORT + 1 || 3001;

const babelrc = fs.readFileSync('./.babelrc', 'utf8');
let babelrcObject = {};

try {
  babelrcObject = JSON.parse(babelrc);
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

const babelrcObjectDevelopment = (babelrcObject.env && babelrcObject.env.development) || {};

// merge global and dev-only plugins
const combinedPlugins = (babelrcObject.plugins || []).concat(babelrcObjectDevelopment.plugins);

const babelLoaderQuery = Object.assign({}, babelrcObject, babelrcObjectDevelopment, { plugins: combinedPlugins });
delete babelLoaderQuery.env;

const validDLLs = helpers.isValidDLLs('vendor', assetsPath);
if (process.env.WEBPACK_DLLS === '1' && !validDLLs) {
  process.env.WEBPACK_DLLS = '0';
  console.warn('webpack dlls disabled');
}

const webpackConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    main: [
      `webpack-hot-middleware/client?path=http://${host}:${port}/__webpack_hmr`,
      'bootstrap-loader',
      './src/client.js'
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].chunk.js',
    publicPath: `http://${host}:${port}/dist/`
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'happypack/loader?id=jsx',
        include: [path.resolve(__dirname, '../src')]
      },
      {
        test: /\.json$/,
        loader: 'happypack/loader?id=json',
        include: [path.resolve(__dirname, '../src')]
      },
      {
        test: /\.less$/,
        loader: 'happypack/loader?id=less',
        include: [path.resolve(__dirname, '../src')]
      },
      {
        test: /\.scss$/,
        loader: 'happypack/loader?id=sass',
        include: [path.resolve(__dirname, '../src')]
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/octet-stream'
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'image/svg+xml'
        }
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url-loader',
        options: {
          limit: 10240
        }
      }
    ]
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins: [
    // https://goo.gl/dTQYan
    // new webpack.LoaderOptionsPlugin({
    // }),

    // hot reload
    new webpack.HotModuleReplacementPlugin(),

    new webpack.IgnorePlugin(/webpack-stats\.json$/),

    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: true // <-------- DISABLE redux-devtools HERE
    }),

    webpackIsomorphicToolsPlugin.development(),

    new ReactLoadablePlugin({
      filename: path.join(assetsPath, 'loadable-chunks.json')
    }),

    helpers.createHappyPlugin('jsx', [
      {
        loader: 'babel-loader',
        exclude: /node_modules(\/|\\)(?!(@feathersjs))/,
        options: babelLoaderQuery
      },
      {
        loader: 'eslint-loader',
        options: { emitWarning: true }
      }
    ]),
    helpers.createHappyPlugin('less', [
      {
        loader: 'style-loader',
        options: { sourceMap: true }
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          sourceMap: true,
          localIdentName: '[local]___[hash:base64:5]'
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: 'postcss.config.js'
          }
        }
      },
      {
        loader: 'less-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: true
        }
      }
    ]),
    helpers.createHappyPlugin('sass', [
      {
        loader: 'style-loader',
        options: { sourceMap: true }
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          sourceMap: true,
          localIdentName: '[local]___[hash:base64:5]'
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: {
            path: 'postcss.config.js'
          }
        }
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: true
        }
      }
    ])
  ]
};

if (process.env.WEBPACK_DLLS === '1' && validDLLs) {
  helpers.installVendorDLL(webpackConfig, 'vendor');
}

module.exports = webpackConfig;
