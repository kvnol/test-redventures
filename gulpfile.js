const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const files = {
  views: [
    'src/views/*.pug'
  ],
  css: [
    'src/assets/sass/main.sass'
  ],
  js: [
    'src/assets/js/*'
  ]
};

gulp.task('views', () => {
  return gulp.src(files.views)
    .pipe(pug())
    .pipe(gulp.dest('app'));
});

gulp.task('css', () => {
  return gulp.src(files.css)
    .pipe(sass())
    .pipe(gulp.dest('app/assets/css'));
});

gulp.task('js', () => {
  return gulp.src(files.js)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/assets/js'));
});

gulp.task('watch-views', () => {
  gulp.watch('src/views/**/*.pug', ['views']);
});

gulp.task('watch-css', () => {
  gulp.watch('src/assets/sass/**/*.sass', ['css']);
});

gulp.task('watch-js', () => {
  gulp.watch('src/assets/js/**/*.js', ['js']);
});

gulp.task('default', ['views', 'css', 'js', 'watch-views', 'watch-css', 'watch-js']);
