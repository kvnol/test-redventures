const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const files = {
  css: [
    'src/assets/sass/main.sass'
  ],
  js: [
    'src/assets/js/*'
  ]
};

gulp.task('default', ['css', 'js']);
