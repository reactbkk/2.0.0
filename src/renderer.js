
exports.render = function render () {
  var Homepage = require('./Homepage').Homepage
  var React = require('react')
  var ReactDOMServer = require('react-dom/server')
  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(Homepage)
  )
}
