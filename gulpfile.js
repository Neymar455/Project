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
gulp.task('index',function(){
    gulp.src('./src/sass/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))
})
gulp.task('jtindex',function(){
    gulp.watch('./src/sass/index.scss',['index'])
})
gulp.task('goods',function(){
    gulp.src('./src/sass/goods.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))
})
gulp.task('jtgoods',function(){
    gulp.watch('./src/sass/goods.scss',['goods'])
})