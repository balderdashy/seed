/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards config/production.js.
 *
 * For more information on configuring datastores, check out:
 * http://sailsjs.com/config/datastores
 */

module.exports.datastores = {


  /*****************************************************************************
  *                                                                            *
  * Your app's default datastore.                                              *
  *                                                                            *
  *****************************************************************************/

  default: {

    /*****************************************************************************
    *                                                                            *
    * Sails apps read and write to local disk by default, using a built-in       *
    * database adapter called `sails-disk`.                                      *
    *                                                                            *
    * This feature is purely for convenience during development.                 *
    * (`sails-disk` is not designed for use in a production environment.)        *
    *                                                                            *
    * To use a different db _during development_, uncomment an option below.     *
    *                                                                            *
    *****************************************************************************/


    /***************************************************************************
    *                                                                          *
    * MySQL is the world's most popular relational database.                   *
    * http://en.wikipedia.org/wiki/MySQL                                       *
    *                                                                          *
    * Run: npm install sails-mysql                                             *
    *                                                                          *
    ***************************************************************************/
    // adapter: require('sails-mysql'),
    // host: 'localhost',
    // user: 'YOUR_DEV_MYSQL_USER', //optional
    // password: 'YOUR_DEV_MYSQL_PASSWORD', //optional
    // database: 'YOUR_DEV_MYSQL_DBNAME' //optional


    /***************************************************************************
    *                                                                          *
    * MongoDB is the leading NoSQL database.                                   *
    * http://en.wikipedia.org/wiki/MongoDB                                     *
    *                                                                          *
    * Run: npm install sails-mongo                                             *
    *                                                                          *
    ***************************************************************************/
    // adapter: require('sails-mongo'),
    // host: 'localhost',
    // port: 27017,
    // user: 'YOUR_DEV_MONGO_USER', //optional
    // password: 'YOUR_DEV_MONGO_PASSWORD', //optional
    // database: 'YOUR_DEV_MONGO_DBNAME' //optional

    /***************************************************************************
    *                                                                          *
    * PostgreSQL is an awesome relational database with powerful features.     *
    * http://en.wikipedia.org/wiki/PostgreSQL                                  *
    *                                                                          *
    * Run: npm install sails-postgresql                                        *
    *                                                                          *
    ***************************************************************************/
    // adapter: require('sails-postgresql'),
    // host: 'localhost',
    // user: 'YOUR_DEV_POSTGRES_USER', // optional
    // password: 'YOUR_DEV_POSTGRES_PASSWORD', // optional
    // database: 'YOUR_DEV_POSTGRES_DBNAME' //optional


    /*****************************************************************************************
    *                                                                                        *
    * More adapters:                                                                         *
    *                                                                                        *
    * http://sailsjs.com/docs/concepts/extending-sails/adapters/available-adapters           *
    *                                                                                        *
    ******************************************************************************************/

  }


};
