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

  EventController: {
    'find': true,
    'findOne': true,
    'find-speakers': true
  },

  FeedbackController: {
    'find': true,
    'findOne': true,
    'create': true
  },

  MessageController: {
    'find': true,
    'findOne': true
  },

  PresentationController: {
    'find': true,
    'findOne': true
  },

  SessionController: {
    'find': true,
    'findOne': true
  },

  SpeakerController: {
    'find': true,
    'findOne': true
  }

};
