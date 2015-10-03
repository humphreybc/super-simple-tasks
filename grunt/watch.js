module.exports = {
  scripts: {
    files: 'src/js/*.coffee',
    tasks: ['coffeelint', 'newer:coffee:scripts', 'newer:concat:app'],
  },
  styles: {
    files: 'src/css/**/*.styl',
    tasks: ['stylus'],
  },
  copyImg: {
    files: ['src/img/*'],
    tasks: ['newer:copy'],
  },
  copyRoot: {
    files: ['src/*'],
    tasks: ['newer:copy'],
  },
  livereload: {
    options: {
      livereload: true
    },
    files: ['public/css/*'],
  },
};