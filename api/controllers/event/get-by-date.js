module.exports = {

    friendlyName: 'Get by date',

    description: 'Return past events if archive is set to true',

    inputs: {
        archive: {
            type: 'boolean',
            required: true
        },
        date: {
            type: 'string',
            required: true
        }
    },

    exits: { },

    fn: async function (inputs, exits) {
        let filteredEvents;
        if (inputs.archive) {
            filteredEvents = await Event.find({
                where: { end: { '<': inputs.date } }
            })
        } else {
            filteredEvents = await Event.find({
                where: { end: { '>=': inputs.date } }
            })
        }
        return exits.success(filteredEvents);
    }
};
