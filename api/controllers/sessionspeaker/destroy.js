module.exports = {


  friendlyName: 'Delete sessionspeaker row with ids of session and speaker',


  description: '',


  inputs: {
    session_id: {
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
    const speaker = await SessionSpeaker.destroy({
      session_id: inputs.session_id,
      speaker_id: inputs.speaker_id
    }).fetch();

    // All done.
    return exits.success(speaker);

  }


};
