module.exports = function(grunt) {

grunt.initConfig({
  responsive_images: {
    dev: {
      options: {
        engine: "im"
      },
      files: [{
        expand: true,
        src: ['img/**/*.{gif,jpg,png}'],
        cwd: 'src/',
        dest: 'dist/'
      }]
    }
  },
});

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
