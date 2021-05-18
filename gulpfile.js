'use strict';

const gulp = require('gulp');

module.exports = require('bootstrap-gulp');

gulp.task('build-images-dev', function() {
  return gulp.src(['source/img/**/*.{gif,jpg,png,svg}'])
  .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts-dev', function() {
  return gulp.src(['source/scss/fonts/**/*.{ttf,svg,woff,woff2,eot}'])
  .pipe(gulp.dest('dist/fonts'));
});

gulp.task('watch', function() {
  gulp.watch('source/img/**/*.{gif,jpg,png,svg}', ['build-images-dev']);
  gulp.watch('source/scss/fonts/**/*.{ttf,svg,woff,woff2,eot}',['fonts-dev']);
});