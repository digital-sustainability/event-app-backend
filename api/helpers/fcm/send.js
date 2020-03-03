const FCM = require('fcm-push');
const fcm = new FCM(sails.config.custom.fcm.key);

module.exports = {


  friendlyName: 'Push',


  description: 'Creates a new push notification',


  inputs: {
    to: {
      type: 'string',
      description: 'registration_token_or_topics'
    },
    condition: {
      type: 'string',
      description: 'condition'
    },
    data: {
      type: 'json',
      description: 'your_custom_data_keys: your_custom_data_values'
    },
    title: {
      type: 'string',
      description: 'Title of your push notification',
      required: true
    },
    body: {
      type: 'string',
      description: 'Body of your push notification',
      allowNull: true
    }
  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    let body = {
      data: inputs.data,
      notification: {
        title: inputs.title,
        body: inputs.body
      }
    };
    if(inputs.to)
      body.to = inputs.to;
    if(inputs.condition)
      body.condition = inputs.condition;

    await fcm.send(body, function(err, response){
      if (err) {
          console.log("Something has gone wrong!");
      } else {
          console.log("Successfully sent with response: ", response);
      }
  });

    return exits.success();
  }


};

