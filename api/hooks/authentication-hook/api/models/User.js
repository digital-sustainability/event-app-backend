/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');
const path = require('path');
const userExtension = require(path.join(process.cwd(), 'hook-model-extensions', 'authentication-hook', 'User.js'));

module.exports = _.merge({

  tableName: 'users',
  attributes: {
    first_name: {
      type: 'string'
    },
    last_name: {
      type: 'string'
    },
    email: {
      type: 'string',
      isEmail: true,
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 10
    },
    confirmed: {
      type: 'boolean',
      defaultsTo: false
    },
    confirm_token: {
      type: 'string',
      required: true
    }
  },

  customToJSON: function() {
    return _.omit(this, ['password']);
  },

  // Here we encrypt password before creating a User
  beforeCreate: function (values, next) {
    bcrypt.genSalt(10, function (err, salt) {
      if(err) 
        return next(err);
      bcrypt.hash(values.password, salt, function (err, hash) {
        if(err) 
          return next(err);
        values.password = hash;
        next();
      });
    });
  },

  beforeUpdate: function(values, next) {
    if(values.password) {
      bcrypt.genSalt(10, function (err, salt) {
        if(err) 
          return next(err);
        bcrypt.hash(values.password, salt, function (err, hash) {
          if(err) 
            return next(err);
          values.password = hash;
          return next();
        });
      });
    }
    next();
  },

  isRegistrationComplete: function(user) {
    return user.first_name && user.last_name && user.street
    && user.zip_code && user.city;
  },
  
  comparePassword : function (password, user) {
    return bcrypt.compare(password, user.password);
  }
}, userExtension);

