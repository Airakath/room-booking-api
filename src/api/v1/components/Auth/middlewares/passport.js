const passport = require('passport');
const JwrStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require("passport-local").Strategy;
const { ExtractJwt } = require("passport-jwt");
const config = require('src/config/env.config.js');
const Client = require('../../Client/models/ClientModel');

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('authorization'),
	secretOrKey: config.jwt_key_secret,
	issuer: config.jwt_issuer,
};

// JSON WEB TOKENS STRATEGY
passport.use(new JwrStrategy(jwtOptions, async (payload, done) => {
    try {    
        const user = await Client.findById(payload.sub);
        if(!user) return done(null, false);

        return done(null, user);
    } catch (err) {

        return done(err, false);
    }
}));

const localOptions = {
	usernameField: 'email',
	passwordField: 'password',
	session: false,
};

// LOCAL STRATEGY
passport.use(new LocalStrategy(localOptions, async (email, password, done) => {
    
	Client.findOne({ email }, function(err, user) {
        if (err) return done(err);   
        if (!user) return done(null, false);   
        user.isPasswordEqualTo(password, (err, isMatch) => {
			if (err) return done(err);
			if (!isMatch) return done(null, false);
			return done(null, user);
		});
    });
}));