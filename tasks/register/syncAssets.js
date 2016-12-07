/**
 * `tasks/register/syncAssets.js`
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist is not designed to be used directly-- rather
 * it is a helper called by the `watch` task (`tasks/config/watch.js`).
 *
 * For more information see:
 *   http://sailsjs.com/anatomy/tasks/register/sync-assets-js
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('syncAssets', [
    'jst:dev',
    'less:dev',
    'sync:dev',
    'coffee:dev'
  ]);
};
