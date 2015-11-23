module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			build: {
				options: {
					compress: false
				},
				files: {
					'dist/css/style.css':'src/css/style.less'
				}
			}
		}
	});

	// Load Grunt Plugins
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', ['less']);
};
