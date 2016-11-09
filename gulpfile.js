/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('demo', function () {
  gulp.src(['/Users/marthaluciacaicedo/Desktop/myFirstApp/bower_components/angular','/Users/marthaluciacaicedo/Desktop/myFirstApp/bower_components/bootstrap'])
  .pipe(concat('vendor.js'))
  .pipe(uglify())
  .pipe(gulp.dest('/Users/marthaluciacaicedo/Desktop/myFirstApp/public/javascripts'))
});
