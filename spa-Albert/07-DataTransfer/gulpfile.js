/**
 * Created by albert on 12.04.17.
 */

/**
 * Created by albert on 12.04.17.
 */

var gulp = require('gulp'),
    connect = require('gulp-connect');;



gulp.task('connect', function() {
    connect.server({
        // root: '.',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
