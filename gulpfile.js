var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var minifyCSS = require('gulp-minify-css');

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
	.pipe(clean());

	gulp.src(arquivos.css)
	.pipe(gulp.dest(app + '/css'))
	.pipe(clean());

	gulp.src(arquivos.js)
	.pipe(gulp.dest(app + '/js'))
	.pipe(clean());

	gulp.src(arquivos.img)
	.pipe(gulp.dest(app + '/img'));
	.pipe(clean());
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

gulp.task('min', function() {
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