var grunt = require('grunt');

grunt.initConfig({

  'babel': {
    dist: {
      options: {
        sourceMap: false,
        stage: 0
      },

      files: {
        'lib/index.js': 'src/index.js'
      }
    }
  },

  'browserify': {
    dev: {
      files: {
        'example/assets/scripts/app.js': 'example/src/app.js'
      },
      options: {
        watch: true,
        browserifyOptions: {
          debug: true
        },
        transform: [
          ['babelify', {
            stage: 0,
            sourceMap: true
          }]
        ]
      }
    }
  },

  'browserSync': {
    dev: {
      bsFiles: {
        src: [
          'example/*.html'
        ]
      },
      options: {
        watchTask: true,
        server: './example'
      }
    }
  },

  'clean': {
    dev: ['example/assets'],
    dist: ['lib']
  },

  'watch': {
    scripts: {
      files: [
        'src/*.js',
        'example/src/**/*.{js,jsx}'
      ],
      tasks: ['browserify']
    }
  }

});

grunt.registerTask('default', [
  'clean:dev',
  'browserify',
  'browserSync',
  'watch'
]);

grunt.registerTask('dist', [
  'clean:dist',
  'babel:dist'
]);

require('load-grunt-tasks')(grunt);
