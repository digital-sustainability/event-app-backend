module.exports = {


  friendlyName: 'Find',


  description: 'Find feedback.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var joinQuery = `
      SELECT grade, handle, uuid, comment_positive, comment_negative, feedback.createdAt as createdAt, presentation.title as presentation_title,
      speaker_concat.speakers as speakers, session.title as session_title, event.title as event_title
      FROM feedback
      INNER JOIN presentation ON feedback.presentation_id = presentation.id
      INNER JOIN session ON presentation.session_id = session.id
      INNER JOIN event ON session.event_id = event.id
      INNER JOIN (
        SELECT presentation_id, GROUP_CONCAT(concat(first_name, ' ',last_name) SEPARATOR ', ') as speakers FROM speaker
        INNER JOIN presentationspeaker ON speaker.id = presentationspeaker.speaker_id GROUP BY presentation_id
      ) as speaker_concat ON speaker_concat.presentation_id = presentation.id
      `;

    // Send it to the database.
    const rawResult = await sails.sendNativeQuery(joinQuery);

    // All done.
    return exits.success(rawResult.rows);

  }


};
