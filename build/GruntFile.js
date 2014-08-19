module.exports = function (grunt) {

    require('load-grunt-config')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {                                 // task
            dist: {                             // target
                files: {                        // dictionary of files
                    '../css/main.css': 'assets/css/main.scss'     // 'destination': 'source'
                },
                options: {
                    outputStyle: 'compressed'
                }
            },
            dev: {                              // another target
                options: {                      // dictionary of render options
                    sourceMap: true
                },
                files: {
                    '../css/main.css': 'assets/css/main.scss'
                }
            }
        },

        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n/* Author: Jetz Alipalo */\n',
                mangle: false
            },
            dist: {
                files: {
                    '../js/app/main.js': [
                        'assets/js/*.js'
                    ]
                }
            },
            dev: {
                options: {
                    beautify: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/js/',
                    src: '*.js',
                    dest: '../js/app/'
                }]
            }
        },

        watch: {
            css: {
                files: ['assets/css/*.scss'],
                tasks: ['sass:dev']
            },

            scripts: {
                files: ['assets/js/*.js'],
                options: {
                    spawn: false,
                },
                tasks: ['uglify:dev']
            }
        }

    });


    grunt.registerTask('default', ['uglify:dev', 'sass:dev', 'watch']);
    grunt.registerTask('deploy', ['uglify:dist', 'sass:dist']);

};