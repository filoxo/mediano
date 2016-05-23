'use strict';

var gulp = require('gulp'),
		sass = require('gulp-sass'),
		fa = require('node-font-awesome'),
		cssnano = require('gulp-cssnano');

gulp.task('cssnano', function () {
	return gulp.src('./assets/css/style.css')
		.pipe(cssnano())
		.pipe(gulp.dest('./assets/css/'));
});

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

gulp.task('fonts', function() {
	gulp.src(fa.fonts)
		.pipe(gulp.dest('./assets/fonts'));
});

gulp.task('default', function() {
  // place code for your default task here
});