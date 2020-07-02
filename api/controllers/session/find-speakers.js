module.exports = {


    friendlyName: 'Find speakers of session',
  
  
    description: '',
  
  
    inputs: {
      id: {
        type: 'number',
        required: true
      }
    },
  
  
    exits: {
  
    },
  
  
    fn: async function (inputs, exits) {
  
      const query = `SELECT distinct speaker.id, first_name, last_name, email, speaker.position, organization, short_bio,
       photo_url FROM speaker, presentationspeaker, presentation, session WHERE
        speaker.id = presentationspeaker.speaker_id AND
        presentationspeaker.presentation_id = presentation.id AND
        presentation.session_id = session.id AND
        session.id = $1 ORDER BY first_name ASC;
        `;
      const dataStore = Session.getDatastore();
      const speakers = await dataStore.sendNativeQuery(query, [inputs.id]);
  
      // All done.
      return exits.success(speakers.rows);
  
    }
  
  
  };
  