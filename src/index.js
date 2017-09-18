var vueCompiler = require('vue-template-compiler')

module.exports = function (config) {
  var compiled = vueCompiler.compile(config.content)
  return 'module.exports = {render: function () {' + compiled.render + '}};'
}
