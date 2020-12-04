/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  /**
   * Route every request except of api and cookie calls to Angular's index.html.
   */
  'get /*': {
    view: 'pages/homepage',
    skipAssets: true,
    skipRegex: /^(\/api)|(\/__getcookie)/
  },

  'post /api/presentationSpeaker/destroy': 'presentationspeaker/destroy',

  'post /api/eventCategory/destroy': 'eventcategory/destroy',

  'get /api/presentation/:id/populated' : 'presentation/populated-presentation',

  'get /api/speaker/:id/populated' : 'speaker/populated-speaker',

  'get /api/event/:id/ics' : 'event/get-ics',

  /**
   * Enable CSRF in security config settings
   */
  'get /api/csrf-token': {
    action: "security/grant-csrf-token"
  },

  '/api/event/:id/speaker': {
    action: 'event/find-speakers'
  },
  '/api/event/schedule': {
    action: 'event/get-by-date'
  },

  '/api/session/:id/speaker': {
    action: 'session/find-speakers'
  },

  'post /api/notification/send': {
    action: 'notification/send'
  },
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
