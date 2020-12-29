/**
 * Session.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    title: {
      type: 'string',
      required: true
    },
    abstract: {
      type: 'string',
      columnType: 'TEXT',
      allowNull: true
    },
    formatted_abstract: {
      type: 'string',
      allowNull: true
    },
    label_presentations: {
      type: 'string',
      defaultsTo: ''
    },
    position: {
      type: 'number'
    },
    room: {
      type: 'string',
      defaultsTo: ''
    },
    video_conferencing_link: {
      type: 'string',
      allowNull: true
    },
    video_conferencing_label: {
      type: 'string',
      allowNull: true
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    event_id: {
      model: 'event',
      required: true
    },
    speakers: {
      collection: 'speaker',
      via: 'session_id',
      through: 'sessionSpeaker'
    },
    presentations: {
      collection: 'presentation',
      via: 'session_id'
    }
  },

};

