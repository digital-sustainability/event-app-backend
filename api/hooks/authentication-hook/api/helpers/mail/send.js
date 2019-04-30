const sendgrid = require('sendgrid');
const fromEmail = 'info@crowdfin.ch';
const fromName = 'CrowdFin';
module.exports = {


  friendlyName: 'Send',


  description: 'Send mail via SendGrid API and custom Template.',


  inputs: {
    title: {
      type: 'string',
      required: true
    },
    content: {
      type: 'string',
      required: true
    },
    to: {
      type: 'string',
      required: true,
      isEmail: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    /* const helper = sendgrid.mail;
    const fromEmail = new helper.Email(sails.config.custom.mail.fromEmail, sails.config.custom.mail.fromName);
    const toEmail = new helper.Email(inputs.to);
    const content = new helper.Content('text/html', inputs.content);
    const mail = new helper.Mail(fromEmail, inputs.title, toEmail, content);

    mail.personalizations[0]['dynamic_template_data'] = {
      title: inputs.title,
      content: content,
      Sender_Name: 'Forschungsstelle Digitale Nachhaltigkeit'
    }
    
    mail.personalizations[0].addSubstitution(
      new helper.Substitution('%content%', content));
    mail.personalizations[0].addSubstitution(
      new helper.Substitution('%title%', inputs.title));
    mail.personalizations[0].addSubstitution(
      new helper.Substitution('%Sender_Name%', 'Forschungsstelle Digitale Nachhaltigkeit'));
    mail.personalizations[0].addSubstitution(
      new helper.Substitution('%Sender_Address%', 'Engehaldenstrasse 8'));
    mail.personalizations[0].addSubstitution(
      new helper.Substitution('%Sender_City%', 'Bern'));
    mail.personalizations[0].addSubstitution(
      new helper.Substitution('%Sender_State%', 'Switzerland'));
    mail.personalizations[0].addSubstitution(
      new helper.Substitution('%Sender_Zip%', 'Switzerland'));
    mail.setTemplateId(sails.config.custom.mail.templateId); */

    let data = {
      personalizations: [
        {
          to: [
            {
              email: inputs.to
            }
          ],
          dynamic_template_data: {
               title: inputs.title,
               content: inputs.content,
               senderName: 'Forschungsstelle Digitale Nachhaltigkeit',
               senderAddress: 'Engehaldenstrasse 8',
               senderZip: '3012',
               senderCity: 'Bern'
          },
          subject: inputs.title
        }
      ],
      from: {
        email: sails.config.custom.mail.fromEmail,
        name: sails.config.custom.mail.fromName
      },
      template_id: sails.config.custom.mail.templateId
    }

    const sg = sendgrid(sails.config.custom.mail.apiKey);
    const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: data
    });

    await sg.API(request);
    
    // All done.
    return exits.success();

  }


};

