module.exports = {
  options: {
    atBegin: true,
  },
  scripts: {
    files: 'src/js/*.coffee',
    tasks: ['coffeelint', 'newer:coffee:scripts', 'newer:concat:app'],
  },
  styles: {
    files: 'src/css/**/*.styl',
    tasks: ['stylus'],
    options: {
      spawn: false,
      livereload: true,
    },
  },
  copyImg: {
    files: ['src/img/*'],
    tasks: ['newer:copy']
  },
  copyRoot: {
    files: ['src/*'],
    tasks: ['newer:copy']
  },
};