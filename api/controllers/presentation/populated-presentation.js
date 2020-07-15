module.exports = {


  friendlyName: 'Presentation with populated session and populated event',


  description: '',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const presentation = await Presentation.findOne({id: inputs.id}).populate('session_id');

    const event = await Event.findOne({id: presentation.session_id.event_id});

    presentation.session_id.event_id = event;

    // All done.
    return exits.success(presentation);

  }


};
