var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './resources/assets/sass/*.scss';
var output = './public/css';

gulp.task('sass', function () {
    return gulp
        // Find all `.scss` files from the `styles/` folder
        .src(input)
        // Run Sass on those files
        .pipe(sass())
        // Write the resulting CSS in the output folder
        .pipe(gulp.dest(output));
});

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', function () {
    return gulp
        .src(input)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(gulp.dest(output));
});