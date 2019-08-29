const moment = require('moment');

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
        // Workaround for wrong frontend call
        // TODO FIX Frontend request
        const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss');
        let filteredEvents;
        if (inputs.archive) {
            filteredEvents = await Event.find({
                where: { end: { '<': yesterday} }
            })
        } else {
            filteredEvents = await Event.find({
                where: { end: { '>=': yesterday } }
            })
        }
        return exits.success(filteredEvents);
    }
};
