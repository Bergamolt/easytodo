const gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  pug = require('gulp-pug'),
  imagemin = require('gulp-imagemin');
const { src } = require('gulp');

gulp.task('scss', () => {
  return gulp
    .src('#src/scss/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
  //.pipe(browserSync.reload({stream: true}));
});

gulp.task('html', () => {
  return gulp.src('#src/pug/index.pug').pipe(pug()).pipe(gulp.dest('dist/'))
  .pipe(browserSync.reload({stream: true}));
});

// gulp.task('script', () => {
//   return gulp
//     .src('#src/js/index.js')
//     .pipe(gulp.dest('assets/js'))
//     .pipe(browserSync.reload({ stream: true }));
// });

gulp.task('images', () => {
  return gulp
    .src('#src/img/**/*.{jpg,png,gif,ico}')
    .pipe(
      imagemin({
        progresive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3, //0 > 7
      })
    )
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('svg', () => {
  return gulp
    .src('#src/svg/**/*.svg')
    .pipe(
      imagemin({
        progresive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3, //0 > 7
      })
    )
    .pipe(gulp.dest('dist/svg'))
    .pipe(browserSync.reload({ stream: true }));
});

// gulp.task('js', () => {
//   gulp
//     .src('./#src/js/index.js')
//     .pipe(concat('index.js'))
//     // .pipe(uglify())
//     .pipe(gulp.dest('./assets/js'));
// });

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
});

gulp.task('watch', () => {
  gulp.watch('#src/scss/**/*.scss', gulp.parallel('scss'));
//   gulp.watch('#src/js/index.js', gulp.parallel('script'));
//   gulp.watch('#src/js/**/*.js', gulp.parallel('js'));
  gulp.watch('#src/pug/**/*.pug', gulp.parallel('html'));
  gulp.watch('#src/img/**/*.{jpg,png,gif,ico}', gulp.parallel('images'));
  gulp.watch('#scr/svg/**/*.svg', gulp.parallel('svg'));
  gulp.watch('./dist/index.html');
});

gulp.task('default', gulp.parallel('images', 'svg', 'scss', 'watch'));
