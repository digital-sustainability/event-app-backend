/**
 * Speaker.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    first_name: {
      type: 'string',
      required: true
    },
    last_name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      isEmail: true,
      unique: true,
      allowNull: true
    },
    position: {
      type: 'string',
      required: true
    },
    organization: {
      type: 'string',
      required: true
    },
    short_bio: {
      type: 'string',
      columnType: 'TEXT',
      allowNull: true
    },
    formatted_short_bio: {
      type: 'string',
      allowNull: true
    },
    photo_url: {
      type: 'string',
      allowNull: true
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    presentations: {
      collection: 'presentation',
      via: 'speaker_id',
      through: 'presentationSpeaker'
    },
    sessions: {
      collection: 'session',
      via: 'speaker_id',
      through: 'sessionSpeaker'
    },
    events: {
      collection: 'event',
      via: 'speaker_id',
      through: 'eventSpeaker'
    }
  },

  beforeCreate: function(valuesToSet, proceed) {
    // Handle empty unique strings
    if(!valuesToSet.email) {
      valuesToSet.email = null;
    }
    proceed();
  },

  beforeUpdate: function(valuesToSet, proceed) {
    // Handle empty unique strings
    if(!valuesToSet.email) {
      valuesToSet.email = null;
    }
    proceed();
  }

};

