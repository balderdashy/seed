/**
 * `tasks/register/linkAssets.js`
 *
 * ---------------------------------------------------------------
 *
 * For more information see:
 *   http://sailsjs.com/anatomy/tasks/register/link-assets-js
 *
 */
module.exports = function(grunt) {
  grunt.registerTask('linkAssets', [
    'sails-linker:devJs',
    'sails-linker:devStyles',
    'sails-linker:clientSideTemplates'
  ]);
};
