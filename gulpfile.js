var gulp = require('gulp');

var less = require('gulp-less') ;
var bower = require('gulp-bower');
var path = require('path');

var config = require(__dirname + '/config.js');

// font awesome icons
gulp.task('icons', function() { 
  return gulp.src(config.bower + '/components-font-awesome/fonts/**.*') 
    .pipe(gulp.dest('./assets/lib/bower_components/components-font-awesome/fonts/')); 
});

// less
gulp.task('less', function () {
  return gulp.src(config.bower + '/bootstrap-less/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./assets/lib/bower_components/bootstrap/dist/css'));
});

// watch
 gulp.task('watch', function() {
     gulp.watch(config.less + '/**/*.less', ['bootstrap-less']); 
});

  gulp.task('default', ['icons', 'less']);