var gulp=require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-clean-css');

gulp.task('less', function () {
    return gulp.src('./src/asset/less/*.less')
        .pipe(less())
        .pipe(concat('mini.css'))
        .pipe(minify())
        .pipe(gulp.dest('./src/asset/'));
});

gulp.task('default', ['less']);