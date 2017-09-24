var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('default', function() {
	gulp.watch('./sass/*.scss', ['sass']);
	gulp.watch('./templates/*.pug', ['pug']);
});

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('pug', function () {
  return gulp.src('./templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./public/'));
});