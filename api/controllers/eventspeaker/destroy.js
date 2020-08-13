module.exports = {


  friendlyName: 'Delete eventspeaker row with ids of event and speaker',


  description: '',


  inputs: {
    event_id: {
      type: 'number',
      required: true
    },
    speaker_id: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    const speaker = await EventSpeaker.destroy({
      event_id: inputs.event_id,
      speaker_id: inputs.speaker_id
    }).fetch();

    // All done.
    return exits.success(speaker);

  }


};
