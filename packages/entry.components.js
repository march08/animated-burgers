const path = require('path')

const components = [
  'Burger',
  'BurgerSqueeze',
  'BurgerArrow',
]

const entry = components.reduce((ac, item) => ({
  ...ac,
  [item]: path.resolve(__dirname, `./${item}`),
}), {})

module.exports = entry
