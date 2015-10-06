var gulp              = require('gulp'),
    jade              = require('gulp-jade'),
    postcss           = require('gulp-postcss'),
    prettify          = require('gulp-prettify'),
    stylus            = require('gulp-stylus'),
    browserSync       = require('browser-sync'),
    uglify            = require('gulp-uglify'),
    rename            = require('gulp-rename'),
    coffee            = require('gulp-coffee'),
    concat            = require('gulp-concat'),
    sourcemaps        = require('gulp-sourcemaps'),
    svgspritesheet    = require('gulp-svg-spritesheet'),
    html2jade         = require('gulp-html2jade'),
    svgmin            = require('gulp-svgmin'),
    lost              = require('lost'),
    autoprefixer      = require('autoprefixer'),
    csswring          = require('csswring'),
    watch             = require('gulp-watch')
;

gulp.task('styles', function() {
  // Post CSS Plugins
  var processors = [
    lost,
    autoprefixer({browsers: ['last 2 version']}),
    csswring
  ];

  gulp.src('../Build/Dev/assets/styles/styles.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../Build/Dev//assets/css/'));
});

gulp.task('markup', function() {
  gulp.src('project/*.jade')
  .pipe(jade())
  .pipe(prettify({indent_size: 2}))
  .pipe(gulp.dest('../Build/Dev//'));
});

gulp.task('browser-sync', function () {
  var files = [
  '../Build/Dev//**/*.html',
  '../Build/Dev//assets/**/*.html',
  '../Build/Dev//assets/css/**/*.css',
  '../Build/Dev//assets/img/**/*.svg',
  '../Build/Dev//assets/img/**/*.jpg',
  '../Build/Dev//assets/img/**/*.gif',
  '../Build/Dev//assets/img/**/*.png',
  '../Build/Dev//assets/js/**/*.js'
  ];

  browserSync.init(files, {
    server: {
      baseDir: './build'
    }
  });
});

// SVG prep
var options = {nspaces:2};

gulp.task('svg2jade', function(){
  gulp.src('project/assets/images/*.svg')
    .pipe(svgmin())
    .pipe(html2jade(options))
    .pipe(gulp.dest('project/templates/svg/'));
});

gulp.task('svgspritesheet', function () {
    gulp.src('project/assets/images/*.svg')
    .pipe(svgmin())
    .pipe(svgspritesheet({
        cssPathNoSvg: '../Build/Dev//assets/images/sprite.png',
        cssPathSvg: '../Build/Dev//assets/images/sprite.svg',
        demoDest: 'project/demo.html',
        padding: 0,
        positioning: 'packed',
        units: 'em',
        templateSrc: 'project/styl.tpl',
        templateDest: 'project/assets/styles/sprite.styl'
    }))
    .pipe(svgmin())
    .pipe(gulp.dest('../Build/Dev//assets/images/sprite.svg'));
});

gulp.task('minify-svg',function(){
  gulp.src('project/assets/images/*svg')
  .pipe(svgmin())
  // .pipe(html2jade(options))
  .pipe(gulp.dest('../Build/Dev//assets/images/'));
});

gulp.task('minify-svg-icons',function(){
  gulp.src('project/assets/images/icons/*svg')
  .pipe(svgmin())
  // .pipe(html2jade(options))
  .pipe(gulp.dest('../Build/Dev//assets/images/icons/'));
});


gulp.task('coffee', function() {
    return gulp.src('project/assets/scripts/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('project/assets/scripts/'));
});

gulp.task('scriptspre', function() {
  return gulp.src([
                    'bower_components/modernizr/modernizr.js',
                    'project/assets/scripts/scriptspre.js'
                  ])
    .pipe(sourcemaps.init())
    .pipe(concat('pre.js'))
    .pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest('../Build/Dev//assets/js/'));
});

gulp.task('scriptspost', function() {
  return gulp.src([
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/wow.js/dist/wow.js',
                    'bower_components/jquery-simplyscroll/jquery.simplyscroll.js',
                    'project/assets/scripts/scriptspost.js',
                  ])
    .pipe(sourcemaps.init())
    .pipe(concat('post.js'))
    .pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest('../Build/Dev//assets/js/'));
});

gulp.task('scripts',['coffee','scriptspre','scriptspost']);

gulp.task('watch', function() {
  gulp.watch('project/**/*.jade', ['markup']);
  gulp.watch('project/assets/styles/**/*.styl', ['styles']);
  gulp.watch('project/assets/scripts/**/*.coffee', ['scripts']);
});

gulp.task('default', ['styles','markup','watch','scripts','browser-sync']);
