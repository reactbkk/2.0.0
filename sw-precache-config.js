module.exports = {
  staticFileGlobs: [
    'out/**.html',
    'out/static/**.*',
    'out/**/*.*'
  ],
  stripPrefix: 'out/',
  verbose: true,
  runtimeCaching: [{
    urlPattern: /(.*)/,
    handler: 'networkFirst'
  }]
};