var tokenGenerator = require('generate-password');

module.exports = {


  friendlyName: 'Create',


  description: 'Create user.',


  inputs: {
    first_name: {
      type: 'string',
      required: true
    },
    last_name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      isEmail: true,
      required: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 10
    },
    confirm_password: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      allowNull: true
    },
    street: {
      type: 'string',
      required: true
    },
    city: {
      type: 'string',
      required: true
    },
    zip_code: {
      type: 'number',
      required: true
    },
    linked_in_url: {
      type: 'string',
      allowNull: true
    },
    stripe_id: {
      type: 'string',
      allowNull: true
    }
  },


  exits: {
    passwordNotMatch: {
      description: 'Password does not match',
      statusCode: 401
    },
    emailAlreadyInUse: {
      description: 'Email is already in use',
      statusCode: 409
    }
  },


  fn: async function (inputs, exits) {
    let params = this.req.allParams();
    let password = params['password'];
    let confirmPassword = params['confirm_password'];
    if (!password || !confirmPassword || password !== confirmPassword) {
      throw 'passwordNotMatch';
    }

    //Generate confirm token and add to params
    let confirmToken = tokenGenerator.generate({
      length: 60,
      numbers: true
    });
    params.confirm_token = confirmToken;

    /**
     * Transaction to ensure both user creation and confirm
     * email sending.
     */
    var user = await User.create(params).fetch()
      .intercept('E_UNIQUE', (err) => {
        return 'emailAlreadyInUse'
      });

    //Send confirm email
    var content = `Successfully registered. Please click on the link below to confirm your email address: <br> 
       ${sails.config.custom.baseUrl}/register/confirm?user_id=${user.id}&token=${user.confirm_token}`;
    
    await sails.helpers.mail.send('Successfully registered', content, user.email);

    return exits.success(user);
  }


};
