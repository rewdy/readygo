module.exports = function(grunt) {

  grunt.initConfig({
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
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', '> 2% in US']
      },
      single_file: {
        src: 'css/style.css',
        dest: 'css/style.processed.css'
      }
    },
    watch: {
      files: ['scss/**/*.scss'],
      tasks: [
        'sass',
        'autoprefixer'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'autoprefixer']);

}