/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets).
 *
 * For more information on configuration, check out:
 * http://sailsjs.com/config/http
 */

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  *                                                                           *
  * > To add/override your own 3rd-party middleware to the stack, define a    *
  * > (req,res,next) function as a new key in `middleware`, and if necessary, *
  * > add the name of its key in the `middleware.order` array.                *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    // order: [
    //   'cookieParser',
    //   'session',
    //   'bodyParser',
    //   'compress',
    //   'poweredBy',
    //   'router',
    //   'www',
    //   'favicon',
    // ],


    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    * By default,Sails uses [skipper](http://github.com/balderdashy/skipper).  *
    * See https://github.com/expressjs/body-parser for other options.          *
    *                                                                          *
    * Note that Sails uses an internal instance of Skipper by default; to      *
    * override it and specify more options, make sure to "npm install skipper" *
    * in your app first.  You can also specify a different body parser or a    *
    * custom function with req, res and next parameters (just like any other   *
    * middleware function).                                                    *
    *                                                                          *
    ***************************************************************************/

    // bodyParser: (function _configureBodyParser(){
    //   var skipper = require('skipper');
    //   var middlewareFn = skipper({ strict: true });
    //   return middlewareFn;
    // })(),

  },


  /***************************************************************************
  *                                                                          *
  * The number of milliseconds to cache static assets in production.         *
  * These are any flat files like images, scripts, styleshseets, etc.        *
  * that are served by the static middleware.  By default, these files       *
  * are served from `.tmp/public`, a hidden folder compiled by Grunt.        *
  *                                                                          *
  ***************************************************************************/

  // cache: 31557600000

};
