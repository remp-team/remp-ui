var webpack = require('webpack');

module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['./public/build'],
        concurrent: {
            dev: ['nodemon:dev', 'webpack:dev', 'stylus:dev'],
            options: {
                logConcurrentOutput: true
            }
        },
        nodemon: {
            dev: {
                script: './src/js/server.js',
                options: {
                    ignore: ['public/build/**'],
                    ext: 'js,jsx'
                }
            }
        },
        webpack: {
            dev: {
                resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                entry: './src/js/client.js',
                output: {
                    path: './public/build/js',
                    filename: 'client.js'
                },
                module: {
                    loaders: [
                        { test: /\.css$/, loader: 'style!css' },
                        { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: require.resolve('babel-loader') }
                    ]
                },
                plugins: [
                    // Protects against multiple React installs when npm linking
                    new webpack.NormalModuleReplacementPlugin(/^react?$/, require.resolve('react')),
                    new webpack.NormalModuleReplacementPlugin(/^react(\/addons)?$/, require.resolve('react/addons'))
                ],
                stats: {
                    colors: true
                },
                devtool: 'source-map',
                watch: true,
                keepalive: true
            }
        },
        stylus: {
            dev: {
                files: {
                    'public/build/css/app.css': ['src/styl/*.styl']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', ['clean', 'concurrent']);
};
