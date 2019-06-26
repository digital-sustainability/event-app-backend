/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': false,
  'security/grant-csrf-token': true,

  EventController: {
    'find': true,
    'findOne': true,
    'find-speakers': true,
    'create': "isAuthenticated",
    'update': "isAuthenticated",
    'destroy': "isAuthenticated"
  },

  FeedbackController: {
    'find': true,
    'findOne': true,
    'create': true,

  },

  MessageController: {
    'find': true,
    'findOne': true
  },

  PresentationController: {
    'find': true,
    'findOne': true,
    'create': "isAuthenticated",
    'update': "isAuthenticated",
    'destroy': "isAuthenticated"
  },

  SessionController: {
    'find': true,
    'findOne': true,
    'create': "isAuthenticated",
    'update': "isAuthenticated",
    'destroy': "isAuthenticated"
  },

  SpeakerController: {
    'find': true,
    'findOne': true,
    'create': "isAuthenticated",
    'update': "isAuthenticated",
    'destroy': "isAuthenticated"
  },

  PresentationSpeakerController: {
    'find': true,
    'findOne': true,
    'create': "isAuthenticated",
    'update': "isAuthenticated",
    'destroy': "isAuthenticated"
  }

};
