const gulp = require('gulp')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const pug = require('gulp-pug')
const imagemin = require('gulp-imagemin')

gulp.task('html', () => {
    return gulp.src('src/pug/index.pug')
        .pipe(pug()).pipe(gulp.dest('dist/'))
})

gulp.task('scss', () => {
  return gulp
    .src('src/scss/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('images', () => {
  return gulp
    .src('src/img/**/*.{jpg,png,gif,ico}')
    .pipe(
      imagemin({
        progresive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3, //0 > 7
      })
    )
    .pipe(gulp.dest('dist/img'))
})

gulp.task('svg', () => {
  return gulp
    .src('src/svg/**/*.svg')
    .pipe(
      imagemin({
        progresive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3, //0 > 7
      })
    )
    .pipe(gulp.dest('dist/svg'))
})

gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', gulp.parallel('scss'))
  gulp.watch('src/pug/**/*.pug', gulp.parallel('html'))
  gulp.watch('src/img/**/*.{jpg,png,gif,ico}', gulp.parallel('images'))
  gulp.watch('scr/svg/**/*.svg', gulp.parallel('svg'))
});

gulp.task('default', gulp.parallel('images', 'svg', 'scss', 'watch'))
