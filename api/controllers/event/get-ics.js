module.exports = {
    friendlyName: 'iCal',
  
  
    description: 'Get .ics file of an event',
  
  
    inputs: {
      id: {
        type: 'number',
        required: true
      }
    },
  
  
    exits: {
    },
  
  
    fn: async function (inputs, exits) {
  
        const populatedEvent = await Event.findOne({id: inputs.id})
            .populate('speakers')
            .populate('categories');

        // speakers of event
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
        const speakers = (await dataStore.sendNativeQuery(query, [inputs.id])).rows;

        const ics = require('ics');

        let url;
        try {
            (new URI(populatedEvent.url));
            url = populatedEvent.url;
        }
        catch (e) {}
        let start = populatedEvent.start;
        let end = populatedEvent.end;
        
        const event = {
            start: [start.getFullYear(), start.getMonth() + 1, start.getDate(), start.getHours(), start.getMinutes()],
            end: [end.getFullYear(), end.getMonth() + 1, end.getDate(), end.getHours(), end.getMinutes()], 
            title: populatedEvent.title,
            description: populatedEvent.description,
            location: populatedEvent.location,
            url: url,
            categories: populatedEvent.categories.map((category) => category.name),
        }
        
        ics.createEvent(event, (error, value) => {
            if (error) {
                console.log(error)
                return
            } else {
                this.res.attachment('event.ics');
                return exits.success(value);
            }
        });
    }
  
  
  };
  