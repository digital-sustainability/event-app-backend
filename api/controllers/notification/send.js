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
    tooManyTopics: {
      description: 'More than 5 topics',
      statusCode: 400
    },
    invalidCharactersInTopics: {
      description: 'Only a-z allowed in topics',
      statusCode: 400
    },
  },


  fn: async function (inputs, exits) {
    // validate topics
    let topics = inputs.topics.split(",");

    if(topics.length > 5)
      throw 'tooManyTopics';

    const letters = /^[a-z]+$/;
    topics.forEach((topic) => {
      if(!topic.match(letters))
        throw 'invalidCharactersInTopics';
    });

    // bring topics in conditon form https://firebase.google.com/docs/cloud-messaging/send-message#send-messages-to-topics
    topics = topics.map((topic) => "'" + topic + "' in topics");

    await sails.helpers.fcm.send.with({
      condition:  topics.join(" || "),
      data: {'test': true},
      title: inputs.title,
      body: inputs.body
    });

    return exits.success('1');
  }
};
