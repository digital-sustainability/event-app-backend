module.exports = {


  friendlyName: 'Speakers with populated presentations',


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
    const speaker = await Speaker.findOne({id: inputs.id}).populate('presentations');

    for(let i = 0; i < speaker.presentations.length; i ++ ) {
      const session = await Session.findOne({id: speaker.presentations[i].session_id})
        .populate('event_id')
      speaker.presentations[i].session_id = session;
    }


    // All done.
    return exits.success(speaker);

  }


};
