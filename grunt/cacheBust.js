module.exports = {
  options: {
    encoding: 'utf8',
    algorithm: 'md5',
    length: 16,
    ignorePatterns: ['\.jpg', '\.png', '\.svg'],
    deleteOriginals: true
  },
  assets: {
    files: [{
      baseDir: 'public/',
      src: ['public/index.html']
    }]
  }
};