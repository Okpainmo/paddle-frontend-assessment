// 'use strict';

// variables
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

// custom-hello task
gulp.task('hello', function (done) {
  console.log('hello from gulp');
  done();
});

// SCSS compilation task
function buildStyles() {
  return gulp
    .src('src/assets/stylesheets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/stylesheets/css'));
}

exports.buildStyles = buildStyles;

// autoprefixer task
exports.default = () =>
  gulp
    .src('src/assets/stylesheets/scss/**/*.scss')
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest('src/assets/stylesheets/css'));

// watch task
gulp.task('watch', function () {
  gulp.watch(
    'src/assets/stylesheets/scss/**/*.scss',
    gulp.series('buildStyles')
  );
});
