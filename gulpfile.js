var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var minifyCSS = require('gulp-minify-css');

var app = ''; // endereço do projeto

/* Cria os diretórios */
gulp.task('dir', function() {
	gulp.src(app)
	.pipe(gulp.dest(app + 'html/'))
	.pipe(clean())
	.pipe(gulp.dest(app + 'css/min/'))
	.pipe(clean())
	.pipe(gulp.dest(app + 'js/min/'))
	.pipe(clean())
	.pipe(gulp.dest(app + 'img/'))
	.pipe(clean())
	.pipe(gulp.dest(app + 'lib/'))
	.pipe(clean());
});

/* Conexão com o servidor */
gulp.task('connect', function() {
	connect.server({
		livereload: true
	});
});

/* Limpa os arquivos */
gulp.task('limpe', function() {
	gulp.src(app + '*.html').pipe(clean());
	gulp.src(app + '*.css').pipe(clean());
	gulp.src(app + '*.js').pipe(clean());
	gulp.src(app + '*.jpg').pipe(clean());
	gulp.src(app + '*.png').pipe(clean());
});

/* Transfere arquivos para as pastas corretas */
gulp.task('moveFiles', function() {
	gulp.src(app + '*.html' )
	.pipe(gulp.dest(app + '/html'));

	gulp.src(app + '*.css')
	.pipe(gulp.dest(app + '/css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest(app + 'css/min/'));

	gulp.src(app + '*.js')
	.pipe(gulp.dest(app + '/js'))
	.pipe(uglify())
	.pipe(gulp.dest(app + 'js/min'));

	gulp.src(app + '*.jpg')
	.pipe(gulp.dest(app + '/img'));

	gulp.src(app + '*.png')
	.pipe(gulp.dest(app + 'img/'));
});

/* Auto-reload */
gulp.task('r-html', function() {
	gulp.src(app + 'html/*.html').pipe(connect.reload());
});

gulp.task('r-css', function() {
	gulp.src(app + 'css/*.css').pipe(connect.reload());
});

gulp.task('r-js', function() {
	gulp.src(app + 'js/*.js').pipe(connect.reload());
});

gulp.task('refresh', ['r-html', 'r-css', 'r-js']);
/* --- */

/*  Minifica o CSS */
gulp.task('css-min', function() {
	gulp.src(app + 'css/*.css')
	.pipe(minifyCSS())
	.pipe(gulp.dest(app + 'css/min/'));
});

/*  Minifica o JS */
gulp.task('js-min', function() {
	gulp.src(app + 'js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest(app + 'js/min'));
});

/* Minifica CSS e JS */
gulp.task('min', ['css-min', 'js-min']);

/* Organização Geral dos Arquivos */
gulp.task('organize', ['moveFiles', 'limpe']);

gulp.task('concat', function() {
	gulp.src(app + 'html/*.html')
	.pipe(concat('index.html'))
	.pipe(gulp.dest(app + 'dist'));

	gulp.src(app + 'css/min/*.css')
	.pipe(concat('main.min.css'))
	.pipe(gulp.dest(app + 'dist'));

	gulp.src(app + 'js/min/*.js')
	.pipe(concat('main.min.js'))
	.pipe(gulp.dest(app + 'dist'));
});

gulp.task('watch', function() {
	gulp.watch(app + 'css/*.css', ['css-min']);
	gulp.watch(app + 'js/*.js', ['js-min']);
	gulp.watch(app + '**', ['refresh', 'mkdir']);
});

gulp.task('default', ['dir', 'organize', 'connect', 'watch', 'refresh']);