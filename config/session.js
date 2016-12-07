/**
 * Session Configuration
 * (sails.config.session)
 *
 * Sails session integration leans heavily on the great work already done by
 * Express, but also unifies Socket.io with the Connect session store. It uses
 * Connect's cookie parser to normalize configuration differences between Express
 * and Socket.io and hooks into Sails' middleware interpreter to allow you to access
 * and auto-save to `req.session` with Socket.io the same way you would with Express.
 *
 * For a detailed rundown of the available options, check out:
 * http://sailsjs.com/config/session
 */

module.exports.session = {

  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
  secret: 'ef43f919d23cc365ee024a432c38f63d',


  /***************************************************************************
  *                                                                          *
  * Set options for the session cookie. See                                  *
  * https://github.com/expressjs/session#cookie for more info.               *
  *                                                                          *
  ***************************************************************************/

  // cookie: {
  //   // Cookie expiration in milliseconds.
  //   // For example, use 24 * 60 * 60 * 1000 to make sessions expire in 24 hours.
  //   // Default is null, making it a browser cookie, so the session will
  //   // last only for as long as the browser is open.
  //   maxAge: null,
  //   // Path that the cookie is valid for.
  //   path: '/',
  //   // Should the session cookie be HTTP-only? (See https://www.owasp.org/index.php/HttpOnly)
  //   httpOnly: true,
  //   // Should the session cookie be secure? (only valid for HTTPS sites)
  //   secure: false
  // },


};
