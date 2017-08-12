'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const csslint = require('gulp-csslint');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const jscpd = require('gulp-jscpd');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const del = require('del');
const cssnano = require('gulp-cssnano');
const babel = require("gulp-babel");

const cssLibs = [
    '../node_modules/font-awesome/css/font-awesome.min.css'
];

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});
gulp.task('sass', () => {
    return gulp.src('app/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
    .pipe(concat('main.css'))
    .pipe(rename({ suffix: '.min', prefix: '' }))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(cssmin())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('babel', () => {
  return gulp.src('app/js/*.js')
    .pipe(babel())
    .pipe(concat('script.es5.js'))
    .pipe(gulp.dest('app/js'));
});

gulp.task('scripts', ['babel'], () => {
    return gulp.src([
        'app/js/script.es5.js'
        ])
        .on('error', console.log)
        .pipe(concat('scripts.js'))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('css-libs', () => {
    return gulp.src(cssLibs)
        .pipe(concat('libs.css'))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', ['css-libs', 'sass', 'scripts', 'browser-sync'], () => {
    gulp.watch('app/sass/*', ['sass']);
    gulp.watch('app/js/script.js', ['scripts']);
    gulp.watch('app/index.html', browserSync.reload);
});

gulp.task('build', ['clean', 'sass', 'scripts'], () => {

    var buildCss = gulp.src([
            'app/css/*'
        ])
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/scripts.min.js')
        .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist'));

    var buildImg = gulp.src('app/img/*')
        .pipe(gulp.dest('dist/img'));

});

gulp.task('clean', () => {
    return del.sync('dist');
});

gulp.task('clear', () => {
    return cache.clearAll();
})

gulp.task('default', ['watch']);
