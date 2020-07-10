/**
 * Presentation.js
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
    slides: {
      type: 'string',
      defaultsTo: ''
    },
    start: {
      type: 'ref',
      required: true,
      columnType: 'DATETIME'
    },
    end: {
      type: 'ref',
      required: true,
      columnType: 'DATETIME'
    },
    access_token: {
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

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    session_id: {
      model: 'session',
      required: true
    },
    feedbacks: {
      collection: 'feedback',
      via: 'presentation_id'
    },
    speakers: {
      collection: 'speaker',
      via: 'presentation_id',
      through: 'presentationSpeaker'
    },
    messages: {
      collection: 'message',
      via: 'presentation_id'
    }
  },

};

