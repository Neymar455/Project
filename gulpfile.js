var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('compileSass',function(){
    gulp.src('./src/sass/login.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))
})  
gulp.task('jtSass',function(){
    gulp.watch('./src/sass/login.scss',['compileSass'])
})