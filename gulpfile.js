var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('webapp')
    .pipe(webserver({
      	livereload: true,
      	port: 9000,
      	middleware: [ function (req, res, next) {
      		next();
      	} ],
      	proxies: [ {
      		source: "/webapi-2.1",
      		target:"http://localhost:5000/webapi-2.1"
      	} ],
      	fallback: 'index.html',
      directoryListing: true,
      open: false
    }));
});

gulp.task('default', ['webserver']);
