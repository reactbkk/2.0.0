require('./index.css')

if (module.hot) {
  module.hot.accept()
  try {
    const html = require('./renderer').render()
    document.querySelector('#page').innerHTML = html
  } catch (e) {
    document.querySelector('#page').innerHTML = '<h2>Error!</h2><pre id="error"></pre>'
    document.querySelector('#error').textContent = e.stack
  }
}
