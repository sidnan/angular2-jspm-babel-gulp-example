'use strict';

var gulp                    = require('gulp');
var shell                   = require('gulp-shell');

gulp.task('jspm:bundle', shell.task([
  'jspm bundle app dist/main.js'
]))

gulp.task('jspm:bundle-sfx', shell.task([
  'jspm bundle-sfx main dist/main.sfx.js'
]))

gulp.task('serve-changes', () => {
    gulp.watch('./**/*.js', ['jspm:bundle', 'jspm:bundle-sfx']);
});

gulp.task('start-server', shell.task([
  'live-server'
]))

gulp.task('default', ['jspm:bundle-sfx', 'jspm:bundle', 'serve-changes', 'start-server']);
