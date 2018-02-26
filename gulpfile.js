var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('login',function(){
    gulp.src('./src/sass/login.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))
})  
gulp.task('jtlogin',function(){
    gulp.watch('./src/sass/login.scss',['login'])
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
gulp.task('details',function(){
    gulp.src('./src/sass/details.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))
})
gulp.task('jtdetails',function(){
    gulp.watch('./src/sass/details.scss',['details'])
})
gulp.task('car',function(){
    gulp.src('./src/sass/car.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))
})
gulp.task('jtcar',function(){
    gulp.watch('./src/sass/car.scss',['car'])
})
gulp.task('reg',function(){
    gulp.src('./src/sass/reg.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))
})
gulp.task('jtreg',function(){
    gulp.watch('./src/sass/reg.scss',['reg'])
})