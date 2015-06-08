module.exports = {
  generate: {
    options: {
      basePath: 'public/',
      timestamp: true,
      hash: true,
      process: function(path) {
        return path.substring('build/'.length);
      }
    },
    src: [
      'index.html',
      'js/*.js',
      'css/*.css',
      'img/*.svg',
      'img/*.png'
    ],
    dest: 'public/cache_manifest.appcache'
  }
};