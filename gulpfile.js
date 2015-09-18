var gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    prettify    = require('gulp-prettify'),
    sass        = require('gulp-sass'),
    minifyCSS   = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    browserSync = require('browser-sync')
    // imagemin      = require('gulp-imagemin'),
    // autoprefix    = require('gulp-autoprefixer'),
    // notify        = require('gulp-notify'),
    // uncss         = require('gulp-uncss'),
    // markdown      = require('gulp-markdown'),
    concat        = require('gulp-concat'),
    // bower         = require('gulp-bower'),
    watch       = require('gulp-watch')
    ;

  // Markup Tasks
  gulp.task('markup', function() {
    gulp.src('project/*.jade')
    .pipe(jade())
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest('build/'));
  });

  // gulp.task('sass', function () {
  //   gulp.src('project/assets/*.scss')
  //   .pipe(sass())
  //   .pipe(gulp.dest('build/css'));
  // });

  // JavaScript Tasks
  gulp.task('scripts', function(){
    gulp.src('js/*.js')
    gulp.src('bower_components/modernizr/modernizr.js')
    //.pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/assets/js/'))
  });
  
  // // JavaScript Tasks Before Load
  // gulp.task('scriptspre', function(){
  //   gulp.src('bower_components/modernizr/modernizr.js')
  //   gulp.src('bower_components/jquery/dist/jquery.js')
  //   // .pipe(uglify())
  //   // .pipe(concat('jspre.js'))
  //   .pipe(gulp.dest('build/assets/js/'))
  // });
  
  // JavaScript Tasks After Load
  gulp.task('scriptspost', function(){
    return gulp.src([
      'project/assets/scripts/*.js',
    ])
    // .pipe(uglify())
    .pipe(concat('jspost.js'))
    .pipe(gulp.dest('build/assets/js/'))
  });


  // Styles Tasks
  gulp.task('styles', function() {
    gulp.src('project/assets/styles/*.scss')
    .pipe(sass({
      style: 'compress'
    }))
    // .pipe(uglify())
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('build/assets/css/'))
    // .pipe(gulp.dest('build/css/'))
  });


  // Serve
  
  gulp.task('browser-sync', function () {
    var files = [
    'build/**/*'
    ];
    browserSync.init(files, {
      server: {
        baseDir: './build'
      }
    });
  });
  
  // gulp.task('browser-sync', ['styles','markup'], function () {
  //   browserSync({
  //     server: {
  //       baseDir: './build'
  //     }
  //   });
  // });

  // Watch Task
  gulp.task('watchkirby', function() {
    // gulp.watch('project/**/*.jade', ['markup']);
    gulp.watch('project/assets/styles/**/*.scss', ['styles']);
  });

  // Watch Task
  gulp.task('watch', function() {
    gulp.watch('project/**/*.jade', ['markup']);
    gulp.watch('project/assets/styles/**/*.scss', ['styles']);
  });

  // Default task to be run with `gulp`
  gulp.task('default', ['markup','styles','scripts','scriptspost','watch','browser-sync']);
  
  
  
  
  

  // Kirby Tasks
  gulp.task('Kirby',['styles','watchkirby'])
