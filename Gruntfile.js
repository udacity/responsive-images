grunt.initConfig({
  responsive_images: {
    dev: {
      options: {},
      sizes: [{
        name: 'small',
        width: '50%',
        suffix: "_low_50pc",
        quality: 0.2
      },{
        name: "large",
        width: 1024,
        suffix: "_low",
        quality: 0.2
      }],
      files: [{
        expand: true,
        src: ['images/**/*.{jpg}'],
        cwd: '.',
        dest: 'images/dist/'
      }]
    }
  }
});
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-responsive-images');
grunt.registerTask('default', ['copy','responsive_images']);
