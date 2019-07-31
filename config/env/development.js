module.exports = {
    security: {
        cors: {
            allRoutes: true,
            allowOrigins: ['http://localhost:4200'],
            allowCredentials: true,
            allowRequestHeaders: 'content-type,x-csrf-token'
        }
    },

    custom: {
        baseUrl: 'http://localhost:4200'
    }

}