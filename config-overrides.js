const { override, babelInclude, addBabelPlugin } = require('customize-cra')
const path = require("path")

module.exports = override(
  babelInclude([
    path.resolve('src'), // make sure you link your own source
    path.resolve('node_modules/did-jwt/lib/index.js'),
  ]),
  addBabelPlugin('@babel/plugin-transform-modules-commonjs')
)