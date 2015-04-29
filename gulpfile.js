var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var del = require('del');

var app = ''; // endereço do projeto

gulp.task('connect', function() {
	connect.server({
		livereload: true
	});
});

var arquivos = {
	html: [ app + '*.html'],
	css: [ app + '*.css'],
	js: [ app + '*.js'],
	img: ['./' + app + '*.jpg']
};

/* Transfere para as pastas corretas - falta apagar os originais */
gulp.task('organize', function() {
	gulp.src(app + '*.html')
	.pipe(gulp.dest(app + '/html'));

	gulp.src(app + '*.css')
	.pipe(gulp.dest(app + '/css'));

	gulp.src(app + '*.js')
	.pipe(gulp.dest(app + '/js'));

	gulp.src(app + '*.jpg')
	.pipe(gulp.dest(app + '/img'));
});

gulp.task('html', function() {
	gulp.src(app + 'html/*.html')
	.pipe(connect.reload());
});
gulp.task('css-min', function() {
	gulp.src(app + 'css/*.css')
	.pipe(minifyCSS())
	.pipe(gulp.dest(app + 'css/min/'))
	.pipe(connect.reload());
});
gulp.task('js-min', function() {
	gulp.src(app + 'js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest(app + 'js/min'))
	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(app + 'html/*.html', ['html']);
	gulp.watch(app + 'css/*.css', ['css-min']);
	gulp.watch(app + 'js/*.js', ['js-min']);
});

gulp.task('default', [ 'organize', 'html', 'css-min', 'js-min', 'watch', 'connect']);