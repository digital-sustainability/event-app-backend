const passport = require('passport');

module.exports = {


  friendlyName: 'Login',


  description: 'Login auth.',


  inputs: {
    email: {
      type: 'string',
      isEmail: true,
      required: true
    },
    password: {
      type: 'string',
      required: true
    }

  },


  exits: {
    emailNotFound: {
      description: 'Email does not exist',
      statusCode: 404
    },
    emailNotConfirmed: {
      description: 'Email not confirmed',
      statusCode: 400
    },
    invalidPassword: {
      description: 'Invalid password',
      statusCode: 401
    },
    socketNotAllowed: {
      description: 'Socket login is not supported',
      statusCode: 404
    }
  },


  fn: async function (inputs, exits) {
    let req = this.req;
    if(req.isSocket)
      throw 'socketNotAllowed';
    passport.authenticate('local', function (err, user, info) {
      if ((err) || (!user)) {
        if(err)
          return exits.error(err);
        if(info.message === 'emailNotFound')
          return exits.emailNotFound();
        return exits.invalidPassword();
      }
      if(!user.confirmed)
        return exits.emailNotConfirmed();
      req.login(user, function (err) {
        if (err) 
          exits.error(err);
        return exits.success(user);
      });
    })(req, this.res);
  }


};
