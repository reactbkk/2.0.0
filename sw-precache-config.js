module.exports = {
  staticFileGlobs: [
    'out/static/**/*',
    'out/_next/**/*'
  ],
  stripPrefix: 'out/',
  replacePrefix: '/2.0.0/',
  verbose: true,
  runtimeCaching: [{
    urlPattern: /(.*)/,
    handler: 'networkFirst'
  }]
}
