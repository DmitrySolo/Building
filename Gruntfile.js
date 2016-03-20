module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade:{
            compile: {
                options: {
                    pretty: true,
                    data: { debug: false }
                },
                files: {
                    "compiled/layout.html":"jadeTemplates/layout.jade",
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'compiled/style.css': 'sass/style.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'compiled',
                    src: ['*.css', '!*.min.css'],
                    dest: 'compiled',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            css: {
                files: 'sass/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
            html: {
                files: 'jadeTemplates/**',
                tasks: ['jade'],
                options: {
                    livereload: true,
                },
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['compiled/**/*']
            },
        },

    });
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //Registered tasks
    grunt.registerTask('default',['watch']);

};