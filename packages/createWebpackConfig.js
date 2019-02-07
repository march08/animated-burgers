const path = require('path')
const nodeExternals = require('webpack-node-externals') // eslint-disable-line
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // eslint-disable-line
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // eslint-disable-line
const autoprefixer = require('autoprefixer') // eslint-disable-line
const ExtractTextPlugin = require('extract-text-webpack-plugin') // eslint-disable-line


const root = process.cwd()
const src = path.join(root, 'src')
const sassLoader = {
  loader: 'sass-loader',
  options: {
    includePaths: [
      // modify this if importing css from other libs
      path.resolve(src, 'universal/a'),
    ],
  },
}

const cssLoader = {
  loader: 'css-loader',
}
const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: () => [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9',
        ],
      }),
    ],
  },
}

const extractScss = new ExtractTextPlugin('[name]/dist/styles.css')

const createWebpackConfig = ({
  entry,
  libraryTarget = 'commonjs2',
  outputPath = '.',
}) => ({
  node: {
    fs: 'empty',
  },
  mode: process.env.NODE_ENV,
  entry,
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: '[name]/dist/index.js',
    libraryTarget,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      },
      {
        test: /.(s)css$/,
        use: extractScss.extract({
          fallback: 'style-loader',
          use: [
            cssLoader,
            postCssLoader,
            sassLoader,
          ],
        }),

      },
    ],
  },
  plugins: [
    extractScss,
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'), // eslint-disable-line
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
  ],
})

module.exports = createWebpackConfig
