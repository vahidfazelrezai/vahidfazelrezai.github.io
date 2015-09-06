var gulp = require('gulp');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('css', function() {
    gulp.src('./assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('resume', function() {
    gulp.src('./assets/resume/resume.pdf')
        .pipe(gulp.dest('.'));
    gulp.src('./assets/resume/resume.pdf')
        .pipe(gulp.dest('./assets'));
});

gulp.task('watch', function() {
    gulp.watch('./assets/style.css', ['css']);
    gulp.watch('./assets/resume/resume.pdf', ['resume']);
});

gulp.task('default', ['css', 'resume', 'watch']);
