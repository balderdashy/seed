/**
 * `tasks/register/compileAssets.js`
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist is not designed to be used directly-- rather
 * it is a helper called by the `default`, `prod`, `build`, and
 * `buildProd` tasklists.
 *
 * For more information see:
 *   http://sailsjs.com/anatomy/tasks/register/compile-assets-js
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('compileAssets', [
    'clean:dev',
    'jst:dev',
    'less:dev',
    'copy:dev',
    'coffee:dev'
  ]);
};
