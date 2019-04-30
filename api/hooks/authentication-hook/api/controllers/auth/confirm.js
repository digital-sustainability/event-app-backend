module.exports = {


  friendlyName: 'Confirm',


  description: 'Confirm email address of user and enable login.',


  inputs: {
    user_id: {
      type: 'number',
      required: true
    },
    token: {
      type: 'string',
      required: true
    }
  },


  exits: {
    userNotFound: {
      description: 'No user found',
      statusCode: 404
    },
    tokenDoNotMatch: {
      description: 'Confirm token does not match the passed token',
      statusCode: 400
    }
  },


  fn: async function (inputs, exits) {

    var user = await User.findOne({ id: inputs.user_id });
    if (!user)
      throw 'userNotFound';

    //Compare token
    if (user.confirm_token !== inputs.token)
      throw 'tokenDoNotMatch';

    await User.update({ id: user.id}).set({
      confirmed: true
    });

    return exits.success('');
  }


};
