/// <binding AfterBuild='SassToCssCompiler' />
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('SassToCssCompiler', function () {
    gulp.src('Sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./Css/'));
});
gulp.task('default', function () {
    //gulp.watch('sass/**/*.scss', ['SassToCssCompiler']);
});