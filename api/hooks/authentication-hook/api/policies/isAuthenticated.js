module.exports = async function (req, res, next) {
    'use strict';

	// Sockets
	if(req.isSocket)
	{
		if(req.session &&
		req.session.passport &&
		req.session.passport.user)
		{
			return next();
		}

		res.status(401).json();
	}
	// HTTP
	else
	{
		if(req.isAuthenticated())
		{
			return next();
		}
		
                // If you are using a traditional, server-generated UI then uncomment out this code:
                /*
                res.redirect('/login');
                */

                // If you are using a single-page client-side architecture and will login via socket or Ajax, then uncomment out this code:
                res.status(401).json();
	}
}