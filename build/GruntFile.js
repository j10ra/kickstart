module.exports = function (grunt) {

    require('load-grunt-config')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            // task
            dist: {
                files: {
                    '../css/main.css': 'assets/css/main.scss'     // 'destination': 'source'
                },
                options: {
                    style: 'compressed',
                    banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n/* Author: Jetz Alipalo */'
                }
            },
            dev: {
                options: {
                    sourcemap: true,
                    style:'compact',
                    banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n/* Author: Jetz Alipalo */\n'
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
                files: [{
                    expand: true,
                    cwd: 'assets/js/',
                    src: ['*.js', '**/*.js'],
                    dest: '../js/',
                    ext: '.min.js'
                }]
            },
            dev: {
                options: {
                    beautify: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/js/',
                    src: ['*.js', '**/*.js'],
                    dest: '../js/',
                    ext: '.min.js'
                }]
            }
        },

        jshint: {
            options: {
                "white": true,
                "indent": 4,
                "onevar": true,
                "onecase": false,
                "immed": true,
                "debug": false,
                "evil": false,
                "strict": false,
                "multistr": false,
                "laxbreak": false,
                "globalstrict": false,
                "supernew": false,
                "laxcomma": false,
                "asi": false,
                "es5": false,
                "scripturl": false,
                "withstmt": false,
                "bitwise": true,
                "eqeqeq": true,
                "shadow": false,
                "expr": false,
                "noarg": true,
                "newcap": true,
                "forin": true,
                "regexdash": false,
                "node": false,
                "eqnull": false,
                "browser": true,
                "iterator": false,
                "undef": true,
                "latedef": true,
                "nonstandard": false,
                "trailing": true,
                "jquery": true,
                "loopfunc": false,
                "boss": false,
                "nonew": true,
                "funcscope": false,
                "regexp": true,
                "lastsemic": false,
                "smarttabs": true,
                "devel": false,
                "esnext": false,
                "sub": false,
                "curly": true,
                "prototypejs": false,
                "proto": false,
                "plusplus": false,
                "noempty": false,
                "predef": [
                    /* browser global methods */
                    "confirm",
                    "alert",
                    /* general libraries and tools */
                    "_gaq",
                    "jRespond",
                    "Mustache",
                    "_",
                    "angular",
                    "define",
                    "require",
                    "Backbone",
                    /* jasmine */
                    "jasmine",
                    "spyOn",
                    "it",
                    "console",
                    "describe",
                    "expect",
                    "beforeEach",
                    "waits",
                    "waitsFor",
                    "runs",
                    "google",
                    "MarkerClusterer",
                    "InfoBubble",
                    "Label"
                ]
            },
            all: ['assets/js/app/**/*.js']
        },

        watch: {
            css: {
                files: ['assets/css/*.scss'],
                tasks: ['sass:dev']
            },

            scripts: {
                files: ['*.js', '**/*.js'],
                options: {
                    spawn: false
                },
                tasks: ['newer:uglify:dev','newer:jshint']
            }


        }

    });


    grunt.registerTask('default', ['uglify:dev', 'sass:dev', 'watch']);
    grunt.registerTask('deploy', ['uglify:dist', 'sass:dist']);

};