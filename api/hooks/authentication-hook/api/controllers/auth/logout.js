module.exports = {


  friendlyName: 'Logout',


  description: 'Logout auth.',


  inputs: {

  },


  exits: {
    
  },


  fn: async function (inputs, exits) {
    this.req.logout();
    return exits.success('');
  }


};
