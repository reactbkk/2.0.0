module.exports = {
  staticFileGlobs: [
    'out/*.html',
    'out/static/**.*',
    'out/_next/**/*.*'
  ],
  stripPrefix: 'out/',
  verbose: true,
  runtimeCaching: [{
    urlPattern: /(.*)/,
    handler: 'fastest'
  }]
}
