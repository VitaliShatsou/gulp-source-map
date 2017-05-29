var gulp = require('gulp');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');

gulp.task('s', function () {

    // return b.bundle()
    //     .pipe(sourcemaps.init({loadMaps: true}))
    //     .pipe(concat('scripts.js'))
    //     .pipe(uglify())
    //     .pipe(gulp.dest('build/js'))
    //     .pipe(rev())
    //     .pipe(browserSync.reload({stream:true}))
    //     .pipe(sourcemaps.write('./maps'))
    //     .pipe(gulp.dest('build/js'))
    //     .pipe(browserSync.stream({match: 'js/*.js'}))

    return gulp.src('js/*.js')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
        .pipe(rev())
        .pipe(browserSync.reload({stream:true}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.stream())
})

gulp.task('testharness', function() {
	var proxyMiddleware = require('http-proxy-middleware');

    browserSync.init({
        server: {
		    baseDir: "./",
		},
        sourceMaps:true
    });
		
});

gulp.task('default', ['testharness']);