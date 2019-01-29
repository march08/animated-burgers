
const entryComponents = require('./entry.components')
const createWebpackConfig = require('./createWebpackConfig')

process.env.BABEL_ENV = 'production'
process.env.NODE_ENV = 'production'

console.log(entryComponents)

const rimraf = require('rimraf')

Object.values(entryComponents).forEach((item) => {
  rimraf(`${item}/dist`, () => { console.log('done') })
})

module.exports = createWebpackConfig({
  entry: {
    ...entryComponents,
  },
})
