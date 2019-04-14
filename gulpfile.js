var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
  return gulp.src('html-css/module-10/scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .on("error", notify.onError({
    message: "Error: <%= error.message %>",
    title: "Error running something"
  }))
  .pipe(autoprefixer(['last 10 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('html-css/module-10/css'))
});

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: "./html-css/module-10"
    }
  });
  browserSync.watch('./html-css/module-10', browserSync.reload)
});

gulp.task('watch', function () {
  gulp.watch('./html-css/module-10/index.html');
  gulp.watch('./html-css/module-10/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series(
  gulp.parallel('sass'),
  gulp.parallel('watch', 'serve')
));