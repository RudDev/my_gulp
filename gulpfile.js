var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {// Таск для компиляции sass в css
	gulp.src('./project/sass/**/*.sass')//Где брать файлы для компиляциии
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./project/css/'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./project/sass/**/*.sass', ['sass']);
});