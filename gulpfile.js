var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var minifycss = require('gulp-minify-css');
var jsmin = require('gulp-jsmin');

gulp.task('styles', function() {
    return gulp.src([
        './assets/style/app.scss'
    ])
        .pipe(sass({
            includePaths:   [
                './bower_components/foundation/scss'
            ]
        }))
        .pipe(concat('app.css'))
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('scripts', function(){

    gulp.src([
        './bower_components/jquery/dist/jquery.js',
        './bower_components/foundation/js/foundation.js',
        './bower_components/foundation/js/foundation.reveal.js'
    ])
        .pipe(concat('app.js'))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/js'));

    gulp.src('./assets/scripts/*.js')
        .pipe(concat('index.js'))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/js'));

    gulp.src('./bower_components/modernizr/modernizr.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
    gulp.watch('./assets/style/**/*.scss' , ['styles']);
    gulp.watch('./assets/scripts/*.js' , ['scripts']);
});

gulp.task('default', ['styles','scripts']);

