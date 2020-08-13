/**
 * Event.js
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
    description: {
      type: 'string',
      required: true
    },
    formatted_description: {
      type: 'string',
      allowNull: true
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
    location: {
      type: 'string',
      required: true
    },
    location_details: {
      type: 'string',
      allowNull:true
    },
    image_path: {
      type: 'string',
      allowNull: true
    },
    url: {
      type: 'string',
      allowNull: true
    },
    url_label: {
      type: 'string',
      allowNull: true
    },
    published: {
      type: 'boolean',
      defaultsTo: false
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    sessions: {
      collection: 'session',
      via: 'event_id'
    },
    speakers: {
      collection: 'speaker',
      via: 'event_id',
      through: 'eventSpeaker'
    },
    categories: {
      collection: 'category',
      via: 'event_id',
      through: 'eventCategory'
    }

  },

};

