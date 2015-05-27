module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      scripts: {
        files: {
          '.tmp/concat/js/app.js': ['src/js/utils.coffee',
                                    'src/js/storage.coffee',
                                    'src/js/analytics.coffee',
                                    'src/js/task.coffee',
                                    'src/js/views.coffee',
                                    'src/js/listview.coffee',
                                    'src/js/taskview.coffee',
                                    'src/js/extension.coffee',
                                    'src/js/export.coffee',
                                    'src/js/dragdrop.coffee',
                                    'src/js/migrations.coffee',
                                    'src/js/tour.coffee',
                                    'src/js/app.coffee']
        },
        options: {
          bare: true
        }
      }
    },
    coffeelint: {
      app: ['src/js/*.coffee'],
      options: {
        indentation: {
          value: 2,
          level: 'error'
        },
        max_line_length: {
          value: 120,
          level: 'error'
        },
        cyclomatic_complexity: {
          level: 'warn'
        },
        no_unnecessary_double_quotes: {
          level: 'warn'
        },
        no_unnecessary_fat_arrows: {
          level: 'warn'
        }
      }
    },
    stylus: {
      compile: {
        files: {'public/css/app.css': 'src/css/app.styl'}
      }
    },
    concat: {
      app: {
        files: {
          'public/js/app.js': ['src/vendor/*',
                               '.tmp/concat/js/app.js']
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src/', src: 'img/**', dest: 'public/'},
          {expand: true, cwd: 'src/', src: 'fonts/**', dest: 'public/'},
          {expand: true, cwd: 'src/', src: '*', dest: 'public/', filter: 'isFile'}
        ]
      }
    },
    uglify: {
      app: {
        files: {
          'public/js/app.js': ['public/js/app.js']
        }
      }
    },
    cacheBust: {
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
    },
    watch: {
      scripts: {
        files: 'src/js/*.coffee',
        tasks: ['coffeelint', 'newer:coffee:scripts', 'newer:concat:app']
      },
      styles: {
        files: 'src/css/**/*.styl',
        tasks: ['newer:stylus']
      },
      livereload: {
        options: { livereload: true },
        files: ['public/css/*'],
        tasks: []
      },
      copyImg: {
        files: ['src/img/*'],
        tasks: ['newer:copy']
      },
      copyRoot: {
        files: ['src/*'],
        tasks: ['newer:copy']
      },
      options: {
        atBegin: true
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public',
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask('dev', [
    'watch'
  ]);

  grunt.registerTask('build', [
    'coffeelint',
    'coffee',
    'stylus',
    'concat',
    'copy',
    'uglify',
    'cacheBust'
  ]);
};