var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

gulp.task('js', function() {
    return gulp.src('assets/script.js')
        .pipe(uglify())
        .pipe(rename('script.dist.js'))
        .pipe(gulp.dest('assets'));
});

gulp.task('css', function() {
  return gulp.src('assets/style.css')
      .pipe(autoprefixer())
      .pipe(minifyCss())
      .pipe(rename('style.dist.css'))
      .pipe(gulp.dest('assets'));
});

gulp.task('watch', function() {
    gulp.watch('assets/script.js', ['js']);
    gulp.watch('assets/style.css', ['css']);
});

gulp.task('default', ['js', 'css', 'watch']);
