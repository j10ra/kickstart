module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

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
            }
        },
        
        cssmin: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n/* Author: Jetz Alipalo */'
            },
            combine: {
                files: {
                    '../css/main.css': ['assets/css/*.css']
                }
            }
        },

        sync: {
            main: {
                files: [{
                    cwd: 'assets/css/',
                    src: [
                      '**',
                      '!**/*.txt'
                    ],
                    dest: '../css/'
                }, {
                    cwd: 'assets/js/',
                    src: [
                      '**',
                      '!**/*.txt'
                    ],
                    dest: '../js/app/'
                }],
                verbose: true // Display log messages when copying files
            }
        },

        watch: {
            css: {
                files: ['assets/css/*.css'],
                tasks: ['sync']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sync');

    grunt.registerTask('default', ['sync', 'watch']);
    grunt.registerTask('deploy', ['uglify', 'cssmin']);

};