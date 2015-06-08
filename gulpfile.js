var gulp = require('gulp');
var path = require('path');

// gulp plugins
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var less = require('gulp-less');
var bower = require('gulp-bower');


// connect server
gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: process.env.PORT || 5000 // localhost:5000
  });
});

// html
gulp.task('html', function () {
  var stream = gulp.src('index.html')
    .pipe(connect.reload());
  return stream;
});

// less
gulp.task('less', function () {
  return gulp.src('./app/less/app.less')
    .pipe(less())
    .pipe(gulp.dest('./assets/css'))
    .pipe(connect.reload());
});

// watch
gulp.task('watch', function() {
  gulp.watch('./app/less/app.less', ['less']);
  gulp.watch('index.html', ['html']);
});

gulp.task('default', ['less', 'connect', 'watch']);