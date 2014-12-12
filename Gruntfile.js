module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '30%',
            suffix: '_20q_30pcw',
            quality: 20
          },{
            name: 'large',
            width: '50%',
            suffix: '_40q_50pcw',
            quality: 40
          }]
        },
        files: [{
          expand: true,
          src: ['jpg/*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
