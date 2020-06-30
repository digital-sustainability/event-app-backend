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
    redirect: {
      type: 'boolean',
      defaultsTo: false
    },
    redirectTo: {
      type: 'string',
      isIn: ['event', 'session', 'presentation', 'speaker'],
      allowNull: true
    },
    redirectId: {
      type: 'number',
      allowNull: true
    }
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

    let data = {};
    if (inputs.redirect) {
      data = {
        redirectTo: inputs.redirectTo,
        redirectId: inputs.redirectId
      };
    }

    await sails.helpers.fcm.send.with({
      condition:  topics.join(" || "),
      data: data,
      title: inputs.title,
      body: inputs.body
    });

    // save notification in database
    await Notification.create({
      title: inputs.title, 
      body: inputs.body, 
      topics: inputs.topics,
      redirect: inputs.redirect,
      redirectTo: inputs.redirectTo,
      redirectId: inputs.redirectId});

    return exits.success('1');
  }
};
