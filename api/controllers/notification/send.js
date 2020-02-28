module.exports = {


  friendlyName: 'Send',


  description: 'Send notification.',

  inputs: {
    title: {
      type: 'string',
      required: true
    },
    body: {
      type: 'string',
      required: true
    },
    topics: {
      type: 'string',
      required: true
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    console.log(inputs);
      await sails.helpers.fcm.send.with({
        to: '/topics/banana',
        data: {'test': true},
        title: 'Dein Becher wurde überscannt',
        body: `Dein Becher wurde durch eine andere Person gescannt.`
      });

    return exits.success('success');
  }


};
