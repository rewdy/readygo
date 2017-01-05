module.exports = function(grunt) {

  grunt.initConfig({
      browserSync: {
        dev: {
            bsFiles: {
                src: [
                    'css/*.css',
                    'js/*.js',
                    '**/*.html',
                    '**/*.php'
                ]
            },
            options: {
                watchTask: true,
                proxy: 'readygo.dev'
            }
        }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: '> 5% in US'}),
          require('cssnano')()
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },
    watch: {
      files: ['scss/**/*.scss'],
      tasks: [
        'sass',
        'postcss'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'postcss']);

  grunt.registerTask('default', ['browserSync', 'watch']);

}
