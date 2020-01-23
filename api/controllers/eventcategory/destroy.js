module.exports = {


  friendlyName: 'Delete Event Category',


  description: '',


  inputs: {
    event_id: {
      type: 'number',
      required: true
    },
    category_id: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const eventCategory = await EventCategory.destroy({
      event_id: inputs.event_id,
      category_id: inputs.category_id
    }).fetch();

    // All done.
    return exits.success(eventCategory);

  }


};
