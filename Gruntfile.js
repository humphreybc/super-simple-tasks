module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      scripts: {
        files: {
          '.tmp/concat/js/app.js': ['js/app.coffee', 'js/task.coffee', 'js/views.coffee', 'js/dragdrop.coffee', 'js/export.coffee', 'js/tour.coffee']
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
        tasks: ['build'],
        atBegin: true
      },
    },
    concat: {
      app: {
        files: {
          'public/js/app.js': ['public/js/jquery.min.js', 'public/js/slip.js', 'public/js/bootstrap-tooltip.js', '.tmp/concat/js/app.js'],
        }
      }
    },
    uglify: {
      app: {
        files: {
          'public/js/app.min.js': ['public/js/app.js'],
        }
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

  grunt.registerTask('default', []);

  grunt.registerTask('dev', [
    'watch'
  ]);

  grunt.registerTask('build', [
    'coffeelint',
    'coffee',
    'stylus',
    'concat',
    'uglify'
  ]);
};