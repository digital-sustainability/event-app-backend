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
        let events;
        if (inputs.archive) {
            events = await Event.find({
                where: { end: { '<': inputs.date } }
            })
        } else {
            event = await Event.find({
                where: { end: { '>=': inputs.date } }
            })
        }
        return exits.success(events);
    }
};
