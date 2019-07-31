
module.exports = {


  friendlyName: 'Delete Presentation Speaker',


  description: '',


  inputs: {
    presentation_id: {
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
    const speaker = await PresentationSpeaker.destroy({
      presentation_id: inputs.presentation_id,
      speaker_id: inputs.speaker_id
    }).fetch();

    // All done.
    return exits.success(speaker);

  }


};
