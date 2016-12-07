/**
 * `tasks/config/jst`
 *
 * ---------------------------------------------------------------
 *
 * Precompile HTML templates using Underscore/Lodash notation into
 * functions, creating a `.jst` file.  This can be brought into your HTML
 * via a <script> tag in order to expose your templates as `window.JST`
 * for use in your client-side JavaScript.
 *
 * (i.e. in other words it takes HTML files in `assets/templates/` and
 *  turns them into tiny little javascript functions that return HTML strings
 *  when you pass a data dictionary into them.  This approach is called
 *  "precompiling", and it can considerably speed up template rendering on
 *  the client, and even reduce bandwidth usage and related expenses.)
 *
 * For more information, see:
 *   http://sailsjs.com/anatomy/tasks/config/jst-js
 *
 */

module.exports = function(grunt) {

  grunt.config.set('jst', {
    dev: {

      // To use other sorts of templates, specify a regexp like the example below:
      // options: {
      //   templateSettings: {
      //     interpolate: /\{\{(.+?)\}\}/g
      //   }
      // },

      // Note that the interpolate setting above is simply an example of overwriting lodash's
      // default interpolation. If you want to parse templates with the default _.template behavior
      // (i.e. using <div><%= this.id %></div>), there's no need to overwrite `templateSettings.interpolate`.


      files: {
        // e.g.
        // 'relative/path/from/gruntfile/to/compiled/template/destination'  : ['relative/path/to/sourcefiles/**/*.html']
        '.tmp/public/jst.js': require('../pipeline').templateFilesToInject
      }
    }
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // This Grunt plugin is part of the default asset pipeline in Sails,
  // so it's already been automatically loaded for you at this point.
  //
  // Of course, you can always remove this Grunt plugin altogether by
  // deleting this file.  But check this out: you can also use your
  // _own_ custom version of this Grunt plugin.
  //
  // Here's how:
  //
  // 1. Install it as a local dependency of your Sails app:
  //    ```
  //    $ npm install grunt-contrib-jst --save-dev --save-exact
  //    ```
  //
  //
  // 2. Then uncomment the following code:
  //
  // ```
  // // Load Grunt plugin from the node_modules/ folder.
  // grunt.loadNpmTasks('grunt-contrib-jst');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

};
