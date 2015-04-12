module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      scripts: {
        files: {
          '.tmp/concat/js/app.js': ['js/app.coffee', 'js/storage.coffee', 'js/task.coffee', 'js/migrations.coffee', 'js/views.coffee', 'js/dragdrop.coffee', 'js/export.coffee', 'js/tour.coffee']
        },
        options: {
          bare: true
        }

      }
    },
    coffeelint: {
      app: ['*.coffee'],
      options: {
        indentation: {
          value: 2,
          level: 'error'
        },
        max_line_length: {
          value: 120,
          level: 'error'
        }
      }
    },
    stylus: {
      compile: {
        files: {'public/css/app.css': 'css/app.styl'}
      }
    },
    watch: {
      scripts: {
        files: 'js/*.coffee',
        tasks: ['coffeelint', 'coffee:scripts', 'concat:app', 'uglify:app']
      },
      styles: {
        files: 'css/**/*.styl',
        tasks: ['stylus']
      },
      livereload: {
        options: { livereload: true },
        files: ['public/**/*'],
        tasks: []
      },
      options: {
        tasks: ['update'],
        atBegin: true
      },
    },
    concat: {
      app: {
        files: {
          'public/js/app.js': ['public/js/jquery-2.1.1.min.js', 'public/js/slip.js', 'public/js/bootstrap-tooltip.js', '.tmp/concat/js/app.js'],
        }
      }
    },
    uglify: {
      app: {
        files: {
          'public/js/app.js': ['public/js/app.js'],
        }
      }
    },
    cacheBust: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 16,
        ignorePatterns: ['\.jpg', '\.png', '\.svg', 'html5shiv'],
        deleteOriginals: true
      },
      assets: {
        files: [{
          baseDir: 'public/',
          src: ['public/index.html']
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-cache-bust');

  grunt.registerTask('default', []);

  grunt.registerTask('dev', [
    'watch'
  ]);

  grunt.registerTask('update', [
    'coffeelint',
    'coffee',
    'stylus',
    'concat'
  ]);

  grunt.registerTask('build', [
    'coffeelint',
    'coffee',
    'stylus',
    'concat',
    'uglify'
  ]);

  grunt.registerTask('bust', [
    'cacheBust'
  ]);
};