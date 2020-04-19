'use strict';

const gulp = require('gulp');
const del = require('del');
const bookmarklet = require('gulp-bookmarklet');


const paths = {
    src: 'src/**/*',
    dist: './dist/'
};

function clean() {
    return del(paths.dist)
}

function javascript() {
    return gulp.src(paths.src)
        .pipe(bookmarklet())
        .pipe(gulp.dest(paths.dist));
}

gulp.task('javascript', javascript);

gulp.task('clean', clean);

gulp.task('watch', function () {
    gulp.watch(paths.src, javascript);
});
