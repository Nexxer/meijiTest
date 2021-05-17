'use strict';

const gulp = require('gulp');

module.exports = require('bootstrap-gulp');

gulp.task('build-images-dev', function() {
  return gulp.src(['source/img/**/*.{gif,jpg,png,svg}'])
  .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
  gulp.watch('source/img/**/*.{gif,jpg,png,svg}', ['build-images-dev']);
});