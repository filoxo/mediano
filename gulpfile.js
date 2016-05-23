'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/_scss/**/*.scss')
    .pipe(
		sass({
			outputStyle: 'compressed',
			includePaths: require('node-normalize-scss').includePaths
		})
		.on('error', sass.logError)
	)
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/_scss/**/*.scss', ['sass']);
});

gulp.task('default', function() {
  // place code for your default task here
});