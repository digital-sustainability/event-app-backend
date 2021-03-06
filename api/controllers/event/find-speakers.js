module.exports = {


  friendlyName: 'Find speakers of event',


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
     photo_url FROM speaker, presentationspeaker, presentation, session, event WHERE
      (speaker.id = presentationspeaker.speaker_id AND
      presentationspeaker.presentation_id = presentation.id AND
      presentation.session_id = session.id AND
      session.event_id = event.id AND
      event.id = $1) OR
      (speaker.id = presentationspeaker.speaker_id AND
      presentationspeaker.presentation_id = presentation.id AND
      presentation.event_id = event.id AND
      event.id = $1)
      ORDER BY first_name ASC;
      `; // first part: speakers of presenations of sessions of the event, second part: speakers of presentations of the event
    const dataStore = Event.getDatastore();
    const speakers = await dataStore.sendNativeQuery(query, [inputs.id]);

    // All done.
    return exits.success(speakers.rows);

  }


};
