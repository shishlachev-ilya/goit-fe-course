let gulp = require('gulp'),
  babel = require("gulp-babel"),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create();


gulp.task("script", function () {
  return gulp.src("javascript/module-04/*.js")
  .pipe(babel())
  .pipe(uglify())
  .pipe(gulp.dest("javascript/module-04/"));
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./javascript/module-04"
    }
  });
  browserSync.watch('javascript/module-04', browserSync.reload)
});

gulp.task('watch', function () {
  // gulp.series('script')
  gulp.watch('javascript/module-04/*.js');
});

gulp.task('default', gulp.series(
  // gulp.parallel('script'),
  gulp.parallel('watch', 'serve')
));