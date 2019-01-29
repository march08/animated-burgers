
const entryComponents = require('./entry.components')
const createWebpackConfig = require('./createWebpackConfig')

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

module.exports =  createWebpackConfig({
  entry: {
    ...entryComponents,
  },
})
