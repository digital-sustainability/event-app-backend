const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    bcrypt = require('bcrypt');

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (req, id, cb) {
    var assetRegex = /(\w+\.(?:js|css|woff2|svg)|\/images\/\w+\.(?:png|jpe?g|gif))$/;
    var assetCall = assetRegex.test(req.url);
    //Don't deserialize user if it is a asset request
    //Solution as trade-off between sails asset pipeline performance and database interaction count reductions.
    if(assetCall)
      return done(null, {});
    User.findOne({id}).exec(function (err, user) {
    if(!user)
        //Reset session
        cb(err, false);
    else
        cb(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passportField: 'password',
    passReqToCallback: true
}, function (req, email, password, cb) {
    User.findOne({ email }).exec(function (err, user) {
        if (err)
            return cb(err);
        if (!user)
            return cb(null, false, { message: 'emailNotFound' });
        bcrypt.compare(password, user.password, function (err, res) {
            if (!res) 
                return cb(null, false, { message: 'invalidPassword' });
            return cb(null, user, { message: 'Login Succesful'});
        });
    });
}));