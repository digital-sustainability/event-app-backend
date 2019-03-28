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
    lat: {
      type: 'number',
      columnType: 'double',
      allowNull: true
    },
    lng: {
      type: 'number',
      columnType: 'double',
      allowNull: true
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
    }

  },

};

