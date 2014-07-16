'use strict';
var gulp = require('gulp')
var $ = require('gulp-load-plugins')();
// var gutil = require('gulp-util')
// var sass = require('gulp-sass')
// var autoprefix = require('gulp-autoprefixer')
// var minifyCSS = require('gulp-minify-css')
// var concat = require('gulp-concat')
// var uglify = require('gulp-uglify')

var config = {
    env: 'production'
}

var sassDir = 'app/assets/styles';
var targetCSSDir = 'public/styles';

var jsDir = 'app/assets/scripts';
var targetJSDir = 'public/scripts';

var pluginsJS = [
    'app/assets/bower_components/bootstrap-sass/dist/js/bootstrap.js',
    'app/assets/bower_components/moment/moment.js',
    'app/assets/bower_components/livestampjs/livestamp.js'
];

var componentsJS = [
    'app/assets/bower_components/jquery/jquery.js',
    'app/assets/bower_components/underscore/underscore.js'
];

// var pluginCSS = [
//     List paths to various plugin CSS files needed here
// ]

// Compiles the SASS/SCSS files into their CSS versions. Also runs the fonts and images tasks as well. If you have plugins with stylesheets
// that need to be loaded, uncomment the plugins:css task in the array below.
gulp.task('styles', ['fonts', 'images', /*'plugins:css'*/], function() {
    return gulp.src(sassDir + "/*.scss")
        .pipe($.plumber())
        .pipe($.rubySass({
            style: 'expanded',
            precision: 10
        }));
});

gulp.task('jshint', function() {
    return gulp.src(jsDir + '/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.jshint.reporter('fail'));
});


// For the time being just copies fonts into the public folder. Could probably do some sort of flatening here.
gulp.task('fonts', function() {
    return gulp.src('app/assets/styles/fonts/**/')
        .pipe(gulp.dest('public/styles/fonts/'));
});

// At the time being, images are just being copied. Havent determined the best way to imagemin these images, and update the blade templates accordingly
gulp.task('images', function() {
    return gulp.src('app/assets/images/**/')
        .pipe(gulp.dest('public/images/'));
});

// If you include plugins that require CSS files to be loaded in. Add their paths to the pluginCSS array above, and uncomment this tast
// gulp.task('plugins:css', function() {
//     if (config.env == 'local') {
//         return gulp.src(pluginCSS)
//             .pipe($.autoprefix('last 1 version'))
//             .pipe($.concat('plugins.css'))
//             .pipe(gulp.dest(targetCSSDir));
//     } else {
//         return gulp.src(pluginCSS)
//             .pipe($.autoprefix('last 1 version'))
//             .pipe($.csso)
//             .pipe($.concat('plugins.css'))
//             .pipe(gulp.dest(targetCSSDir));
//     }
// });

//Concat's all the application JS files into a single file, and then copies it into the target directory. If ran for production, also uglifies the JS source
gulp.task('js', ['plugins:js', 'components:js'], function() {
    if (config.env == 'local') {
        return gulp.src(jsDir + '/**/*.js')
            .pipe($.concat('main.js')) //Come up with a better name
            .pipe(gulp.dest(targetJSDir))
    } else {
        return gulp.src(jsDir + '/**/*.js')
            .pipe($.concat('main.js')) //Come up with a better name
            .pipe($.uglify())
            .pipe(gulp.dest(targetJSDir))
    }
});

//This task concats all bower loaded plugin JS files, and uglifies them if for production.
gulp.task('plugins:js', function() {
    if (config.env == 'local') {
        return gulp.src(pluginsJS)
            .pipe($.concat('plugins.js'))
            .pipe(gulp.dest(targetJSDir));
    } else {
        return gulp.src(pluginsJS)
            .pipe($.concat('plugins.js'))
            .pipe($.uglify())
            .pipe(gulp.dest(targetJSDir));
    }
});

//This task concats all the components JS files from bower, and ugligies them if for production.
gulp.task('components:js', function() {
    if (config.env == 'local') {
        return gulp.src(componentsJS)
            .pipe($.concat('components.js'))
            .pipe(gulp.dest(targetJSDir))
    } else {
        return gulp.src(componentsJS)
            .pipe($.concat('components.js'))
            .pipe($.uglify())
            .pipe(gulp.dest(targetJSDir))
    }
});

// Cleans the target directories.
gulp.task('clean', require('del').bind(null, [targetCSSDir, targetJSDir]));

// Runs all tasks in DEV mode.
gulp.task('dev', ['clean'], function() {
    config.env = 'local';
    gulp.start('js');
    gulp.start('css');
});

// Runs all tasks for Production
gulp.task('default', ['clean'], function() {
    gulp.start('js');
    gulp.start('css');
});