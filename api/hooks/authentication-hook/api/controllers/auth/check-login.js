module.exports = {


  friendlyName: 'Check login',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    if(this.req.user) {
      let user = await User.findOne({id: this.req.user.id});
      return exits.success(user);
    }
    return exits.success('');
  }


};
