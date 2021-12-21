const resolve = dir => require('path').join(__dirname, dir)

module.exports = {
  resolve: {
    extensions: ['.js', '.md'],
    alias: {
      '@': resolve('./docs'),
    },
  },
}
