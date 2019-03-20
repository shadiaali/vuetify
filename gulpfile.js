const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('sass', function() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest('./src/css'))
})

gulp.task('default', gulp.series('sass'), function() {
    gulp.watch('./src/sass/**/*.scss'), gulp.series('sass');
})