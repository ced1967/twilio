var gulp = require('gulp');
var ts = require('gulp-typescript');
var less = require('gulp-less');
var path = require('path');

var tsProject = ts.createProject("tsconfig.json"); 
gulp.task('tsc', function(done) {
    var stream=gulp.src([
            "./ts/**/*.ts"
        ])
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest("./js/"));
    stream.on('end', function() {
        done();
    });
    stream.on('error', function(err) {
        done(err);
    });        
});

// Default Task
gulp.task('default', ['tsc']);
//var build = gulp.series('tsc');
//gulp.task('default',build);
//gulp.task("default", gulp.parallel("tsc"));

