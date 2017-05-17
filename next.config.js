exports.exportPathMap = () => ({
  '/': { page: '/' }
})

if (!process.env.NEXT_DEV) {
  exports.assetPrefix = '/2.0.0'
}
