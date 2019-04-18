'use strict';

const {src, dest, series, parallel, watch} = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const gcmq = require('gulp-group-css-media-queries');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');
const plumber = require('gulp-plumber');
const rigger = require('gulp-rigger');
const stylelint = require('gulp-stylelint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const server = require('browser-sync').create();

function html() {
  return src('html-css/module-11/src/**/*.html')
  .pipe(rigger())
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(dest('html-css/module-11/build'));
}

function styles() {
  return src('html-css/module-11/src/scss/style.scss')
  .pipe(plumber())
  .pipe(
    stylelint({
      reporters: [{formatter: 'string', console: true}],
    }),
  )
  .pipe(sass())
  .pipe(postcss([autoprefixer()]))
  .pipe(gcmq())
  .pipe(dest('html-css/module-11/build/css'))
  .pipe(csso())
  .pipe(rename('style.min.css'))
  .pipe(dest('html-css/module-11/build/css'))
  .pipe(server.stream());
}

function scripts() {
  return src('html-css/module-11/src/js/**/*.js')
  .pipe(plumber())
  .pipe(babel())
  .pipe(concat('script.js'))
  .pipe(dest('html-css/module-11/build/js'))
  .pipe(uglify())
  .pipe(rename('script.min.js'))
  .pipe(dest('html-css/module-11/build/js'));
}

function sprite() {
  return src('html-css/module-11/src/img/icons/icon-*.svg')
  .pipe(svgstore({inlineSvg: true}))
  .pipe(rename('icon-sprite.svg'))
  .pipe(dest('html-css/module-11/build/img'));
}

function images() {
  return src(['html-css/module-11/src/img/**/*.{png,jpg,jpeg,svg}', '!html-css/module-11/src/img/icons/icon-*.svg'])
  .pipe(
    imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo({
        plugins: [{removeViewBox: false}, {cleanupIDs: false}],
      }),
    ]),
  )
  .pipe(dest('html-css/module-11/build/img'));
}

function fonts() {
  return src('html-css/module-11/src/fonts/**/*').pipe(dest('html-css/module-11/build/fonts'));
}

function watcher(done) {
  watch('html-css/module-11/src/**/*.html').on('change', series(html, server.reload));
  watch('html-css/module-11/src/scss/**/*.scss').on('change', series(styles, server.reload));
  watch('html-css/module-11/src/js/**/*.js').on('change', series(scripts, server.reload));

  done();
}

function serve() {
  return server.init({
    server: 'html-css/module-11/build',
    notify: true,
    open: true,
    cors: true,
    ui: false,
    logPrefix: 'DevServer',
    host: 'localhost',
    port: 8080,
  });
}

function clean() {
  return del('html-css/module-11/build');
}

function prepare() {
  return del(['**/.gitkeep', 'README.md']);
}

const build = series(
  clean,
  parallel(sprite, images, fonts, html, styles, scripts),
);

const start = series(build, watcher, serve);

exports.prepare = prepare;
exports.build = build;
exports.start = start;