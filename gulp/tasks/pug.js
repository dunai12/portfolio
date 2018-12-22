'use strict';

module.exports = function() {
  
  $.gulp.task('pug', function() {
    let locals = require('../../source/template/data/_data.js');

    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.pug({ 
        pretty: true,
        locals: locals 
      }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
