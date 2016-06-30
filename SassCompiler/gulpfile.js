var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');


gulp.task('SassToCssCompiler', function () {
    gulp.src('Sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./Css/'));
});
gulp.task('default', function () {
    //gulp.watch('sass/**/*.scss', ['SassToCssCompiler']);
});


gulp.task('JsHint', function () {
    return gulp.src('MyScripts/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('gulp-jshint-file-reporter', {
          filename: "MyScripts/" + '/jshint-output.html'
      }));
});