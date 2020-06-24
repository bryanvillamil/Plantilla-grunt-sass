'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'js/**/*.js',
        '!build/js/app.min.js'
      ]
    },
    sass: {
      dist: {
        options: {
          style: 'compressed',
          compass: false,
          sourcemap: false
        },
        files: {
          'build/css/app.min.css': [
              'scss/app.scss'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'build/js/app.min.js': [
            'js/app.js'
          ]
        },
        options: {
          sourceMap: '/build/js/app.min.js.map',
          sourceMappingURL: '/build/js/app.min.js.map'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: [
          'scss/**/*.scss'
        ],
        tasks: ['sass']
      },
      js: {
        files: [
          'js/**/*.js'
        ],
        tasks: ['jshint', 'uglify']
      },
      html: {
        files: [
          '**/*.html'
        ]
      }
    },
    clean: {
      dist: [
        'build/css/app.min.css',
        'build/js/app.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'sass',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};