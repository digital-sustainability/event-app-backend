module.exports = function (sails) {
    var loader = require('sails-util-micro-apps')(sails); // infere the root micro-app dir automatically

    // Automatically inject hooks, policies and configs
    loader.configure({
        config: __dirname + '/config',
        policies: __dirname + '/api/policies'
    });

    /*
        OR if you want to set a custom path :

        loader.configure({
            hooks: __dirname,// custom Path to hooks, usually the root of the micro-app
            policies: __dirname + '/api/policies',// custom Path to policies
            config: __dirname + '/config'// custom Path to config
        });
     */

    // ... do other stuff

    return {
        initialize: function (next) {
            /*
                Automatically inject:
                 - models under hook's ./api/models
                 - controllers under hook's ./api/controllers
                 - helpers under hook's ./api/helpers
                 - services under hook's ./api/services
            */
            let error;

            /**
             * Inject models and helpers before sails ORM initialization to enable blueprint actions for each
             * injected model.
             *
             * Caution: Don't define same model names in sails api models. Else they get overriden by the ORM initialization.
             * Use the provided hook-model-externsions files instead.
             */
            loader.inject({
                models: __dirname + '/api/models', // Path to the models to inject, it must be absolute
                helpers: __dirname + '/api/helpers', // Path to the helpers to inject, it must be absolute

            }, function (err) {
                if (err)
                    error = err;
            });

            /**
             * Inject controller actions after blueprint hook has been loaded to enable blueprint
             * CRUD (find, findOne, create, update, destroy) overwriting.
             */
            sails.on('hook:blueprints:loaded', function () {
                loader.inject({
                    controllers: __dirname + '/api/controllers'
                }, function (err) {
                    if (err)
                        error = err;
                    return next(error);
                });


            });
        }
    };
}