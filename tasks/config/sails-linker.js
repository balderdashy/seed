/**
 * `tasks/config/sails-linker`
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags and <link> tags into the specified
 * specified HTML and/or EJS files.  The specified delimiters (`startTag`
 * and `endTag`) determine the insertion points.
 *
 * #### Development (default)
 * By default, tags will be injected for your app's client-side JavaScript files,
 * CSS stylesheets, and precompiled client-side HTML templates in the `templates/`
 * directory (see the `jst` task for more info on that).  In addition, if a LESS
 * stylesheet exists at `assets/styles/importer.less`, it will be compiled to CSS
 * and a `<link>` tag will be inserted for it.  Similarly, if any Coffeescript
 * files exists in `assets/js/`, they will be compiled into JavaScript and injected
 * as well.
 *
 * #### Production (`NODE_ENV=production`)
 * In production, all stylesheets are minified into a single `.css` file (see
 * `tasks/config/cssmin.js` task) and all client-side scripts are minified into
 * a single `.js` file (see `tasks/config/uglify.js` task).  Any client-side HTML
 * templates, CoffeeScript, or LESS files are bundled into these same two minified
 * files as well.
 *
 * For more information, see:
 *   http://sailsjs.com/anatomy/tasks/config/sails-linker-js
 *
 */
module.exports = function(grunt) {

  grunt.config.set('sails-linker', {


    //   ╦╔═╗╦  ╦╔═╗╔═╗╔═╗╦═╗╦╔═╗╔╦╗
    //   ║╠═╣╚╗╔╝╠═╣╚═╗║  ╠╦╝║╠═╝ ║
    //  ╚╝╩ ╩ ╚╝ ╩ ╩╚═╝╚═╝╩╚═╩╩   ╩
    //  ┌─    ┌─┐┬  ┬┌─┐┌┐┌┌┬┐  ┌─┐┬┌┬┐┌─┐   ┬┌─┐┬  ┬┌─┐┌─┐┌─┐┬─┐┬┌─┐┌┬┐    ─┐
    //  │───  │  │  │├┤ │││ │───└─┐│ ││├┤    │├─┤└┐┌┘├─┤└─┐│  ├┬┘│├─┘ │   ───│
    //  └─    └─┘┴─┘┴└─┘┘└┘ ┴   └─┘┴─┴┘└─┘  └┘┴ ┴ └┘ ┴ ┴└─┘└─┘┴└─┴┴   ┴     ─┘
    devJs: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public'
      },
      files: {
        '.tmp/public/**/*.html': require('../pipeline').jsFilesToInject,
        'views/**/*.html': require('../pipeline').jsFilesToInject,
        'views/**/*.ejs': require('../pipeline').jsFilesToInject
      }
    },

    devJsRelative: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public',
        relative: true
      },
      files: {
        '.tmp/public/**/*.html': require('../pipeline').jsFilesToInject,
        'views/**/*.html': require('../pipeline').jsFilesToInject,
        'views/**/*.ejs': require('../pipeline').jsFilesToInject
      }
    },

    prodJs: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public'
      },
      files: {
        '.tmp/public/**/*.html': ['.tmp/public/min/production.min.js'],
        'views/**/*.html': ['.tmp/public/min/production.min.js'],
        'views/**/*.ejs': ['.tmp/public/min/production.min.js']
      }
    },

    prodJsRelative: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public',
        relative: true
      },
      files: {
        '.tmp/public/**/*.html': ['.tmp/public/min/production.min.js'],
        'views/**/*.html': ['.tmp/public/min/production.min.js'],
        'views/**/*.ejs': ['.tmp/public/min/production.min.js']
      }
    },


    //  ╔═╗╔╦╗╦ ╦╦  ╔═╗╔═╗╦ ╦╔═╗╔═╗╔╦╗╔═╗
    //  ╚═╗ ║ ╚╦╝║  ║╣ ╚═╗╠═╣║╣ ║╣  ║ ╚═╗
    //  ╚═╝ ╩  ╩ ╩═╝╚═╝╚═╝╩ ╩╚═╝╚═╝ ╩ ╚═╝
    //  ┌─    ┬┌┐┌┌─┐┬  ┬ ┬┌┬┐┬┌┐┌┌─┐  ╔═╗╔═╗╔═╗   ┬   ┌─┐┌─┐┌┬┐┌─┐┬┬  ┌─┐┌┬┐  ╦  ╔═╗╔═╗╔═╗    ─┐
    //  │───  │││││  │  │ │ │││││││ ┬  ║  ╚═╗╚═╗  ┌┼─  │  │ ││││├─┘││  ├┤  ││  ║  ║╣ ╚═╗╚═╗  ───│
    //  └─    ┴┘└┘└─┘┴─┘└─┘─┴┘┴┘└┘└─┘  ╚═╝╚═╝╚═╝  └┘   └─┘└─┘┴ ┴┴  ┴┴─┘└─┘─┴┘  ╩═╝╚═╝╚═╝╚═╝    ─┘
    devStyles: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public'
      },

      files: {
        '.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
        'views/**/*.html': require('../pipeline').cssFilesToInject,
        'views/**/*.ejs': require('../pipeline').cssFilesToInject
      }
    },

    devStylesRelative: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public',
        relative: true
      },

      files: {
        '.tmp/public/**/*.html': require('../pipeline').cssFilesToInject,
        'views/**/*.html': require('../pipeline').cssFilesToInject,
        'views/**/*.ejs': require('../pipeline').cssFilesToInject
      }
    },

    prodStyles: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public'
      },
      files: {
        '.tmp/public/index.html': ['.tmp/public/min/production.min.css'],
        'views/**/*.html': ['.tmp/public/min/production.min.css'],
        'views/**/*.ejs': ['.tmp/public/min/production.min.css']
      }
    },

    prodStylesRelative: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public',
        relative: true
      },
      files: {
        '.tmp/public/index.html': ['.tmp/public/min/production.min.css'],
        'views/**/*.html': ['.tmp/public/min/production.min.css'],
        'views/**/*.ejs': ['.tmp/public/min/production.min.css']
      }
    },


    //  ╔═╗╦═╗╔═╗╔═╗╔═╗╔╦╗╔═╗╦╦  ╔═╗╔╦╗  ╦ ╦╔╦╗╔╦╗╦    ╔╦╗╔═╗╔╦╗╔═╗╦  ╔═╗╔╦╗╔═╗╔═╗
    //  ╠═╝╠╦╝║╣ ║  ║ ║║║║╠═╝║║  ║╣  ║║  ╠═╣ ║ ║║║║     ║ ║╣ ║║║╠═╝║  ╠═╣ ║ ║╣ ╚═╗
    //  ╩  ╩╚═╚═╝╚═╝╚═╝╩ ╩╩  ╩╩═╝╚═╝═╩╝  ╩ ╩ ╩ ╩ ╩╩═╝   ╩ ╚═╝╩ ╩╩  ╩═╝╩ ╩ ╩ ╚═╝╚═╝
    //  ┌─    ┌─┐┬  ┬┌─┐┌┐┌┌┬┐  ┌─┐┬┌┬┐┌─┐  ┬  ┌─┐┌┬┐┌─┐┌─┐┬ ┬  ┌┬┐┌─┐┌┬┐┌─┐┬  ┌─┐┌┬┐┌─┐┌─┐    ─┐
    //  │───  │  │  │├┤ │││ │───└─┐│ ││├┤   │  │ │ ││├─┤└─┐├─┤   │ ├┤ │││├─┘│  ├─┤ │ ├┤ └─┐  ───│
    //  └─    └─┘┴─┘┴└─┘┘└┘ ┴   └─┘┴─┴┘└─┘  ┴─┘└─┘─┴┘┴ ┴└─┘┴ ┴   ┴ └─┘┴ ┴┴  ┴─┘┴ ┴ ┴ └─┘└─┘    ─┘
    devTpl: {
      options: {
        startTag: '<!--TEMPLATES-->',
        endTag: '<!--TEMPLATES END-->',
        fileTmpl: '<script type="text/javascript" src="%s"></script>',
        appRoot: '.tmp/public'
      },
      files: {
        '.tmp/public/index.html': ['.tmp/public/jst.js'],
        'views/**/*.html': ['.tmp/public/jst.js'],
        'views/**/*.ejs': ['.tmp/public/jst.js']
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
  //    $ npm install grunt-sails-linker --save-dev --save-exact
  //    ```
  //
  //
  // 2. Then uncomment the following code:
  //
  // ```
  // // Load Grunt plugin from the node_modules/ folder.
  // grunt.loadNpmTasks('grunt-sails-linker');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

};
