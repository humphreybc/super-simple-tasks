module.exports = {
  generate: {
    options: {
      basePath: 'public/',
      timestamp: true,
      hash: true
    },
    src: [
      'index.html',
      'help.html',
      'js/*',
      'css/*',
      'img/*',
      'fonts/*'
    ],
    dest: 'public/cache_manifest.appcache'
  }
};