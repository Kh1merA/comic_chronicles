const {src, dest, watch, parallel, series} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const clean = require('gulp-clean');

function convertAllScss() {
    return src('src/styles/scss/**/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(dest('src/styles/css'))
}

function watching() {
    watch(['src/styles/scss/**/*.scss'], convertAllScss);
}


exports.convertAllScss = convertAllScss;
exports.watching = watching;

exports.default = parallel(convertAllScss, watching);