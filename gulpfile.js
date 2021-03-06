
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('js', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel({
        stage: 0
      }))
    .pipe(gulp.dest('dist'));
});

gulp.task('cp', function() {
  gulp.src(['./package.json', './README.md'])
    .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['js']);
});

gulp.task('build', ['js', 'cp']);
gulp.task('default', ['build']);
