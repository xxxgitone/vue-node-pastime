var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge({
  NODE_ENV: '"development"',
  BASE_URL: '"http://localhost:8080"'
})
