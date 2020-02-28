module.exports = {


  friendlyName: 'Send',


  description: 'Send notification.',

  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
      await sails.helpers.fcm.send.with({
        to: '/topics/banana',
        data: {'test': true},
        title: 'Dein Becher wurde überscannt',
        body: `Dein Becher wurde durch eine andere Person gescannt.`
      });

    return exits.success('success');
  }


};
