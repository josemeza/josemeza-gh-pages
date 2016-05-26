module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'dist/app.css': 'src/app.scss'
				}
			}
		},

		autoprefixer: {
      your_target: {
        src: 'dist/app.css' // Replaces file in place, no dest needed.
      }
    },

		watch: {
			css: {
				files: 'src/**/*.scss',
				tasks: ['sass']
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'assets/images/',
					src: [
						'**/**/*.{png,jpg,gif}',
						'**/*.{png,jpg,gif}',
						'*.{png,jpg,gif}'
					],
					dest: 'dist/assets/compressed/'
				}]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.registerTask('serve' ,['sass', 'autoprefixer', 'watch']);
	grunt.registerTask('build' ,['sass', 'autoprefixer', 'imagemin']);
}
