var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var minifyCSS = require('gulp-minify-css');

var app = 'src/'; // endereço do projeto

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

gulp.task('server-reload', function() {
	browserSync({
		logPrefix: 'IME',
		server: [app]
	});
	gulp.watch([app + '**'], ['min']);
	gulp.watch([app + '**/*.*'], reload);
});

/* Move os arquivos para as pastas correspondentes*/
gulp.task('moveFiles', function() {
	gulp.src(app + '*.html')
	.pipe(gulp.dest(app + 'html/'));
	
	gulp.src(app + '*.css')
	.pipe(gulp.dest(app + 'css/'))
	.pipe(minifyCSS())
	.pipe(gulp.dest(app + 'css/min/'));
	
	gulp.src(app + '*.js')
	.pipe(gulp.dest(app + 'js/'))
	.pipe(uglify())
	.pipe(gulp.dest(app + 'js/min'));
	
	gulp.src(app + '*.jpg')
	.pipe(gulp.dest(app + 'img/'));

	gulp.src(app + '*.png')
	.pipe(gulp.dest(app + 'img/'));
});

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

/* Limpa os arquivos */
gulp.task('limpe', function() {
	gulp.src(app + '*.html').pipe(clean());
	gulp.src(app + '*.css').pipe(clean());
	// gulp.src(app + '*.js').pipe(clean());
	gulp.src(app + '*.jpg').pipe(clean());
	gulp.src(app + '*.png').pipe(clean());
});

/* Organização Geral dos Arquivos */
gulp.task('organize', ['moveFiles', 'limpe']);

gulp.task('angularJS', function() {
	var jsFiles = gulp.src(app + 'js/');

	if ( jsFiles.match(/(js)/) ) {
		console.log( "js file" );
	}
})

gulp.task('default', ['min', 'server-reload']);
