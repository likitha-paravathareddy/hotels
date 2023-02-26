const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser((user , done) => {
	done(null , user);
})
passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(new GoogleStrategy({
	clientID:"221635841751-eb2n9bgm8qtkvi2sh0ek5em89mlsjed5.apps.googleusercontent.com", // Your Credentials here.
	clientSecret:"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", // Your Credentials here.
	callbackURL:"http://localhost:4000/auth/callback",
	passReqToCallback:true
},
function(request, accessToken, refreshToken, profile, done) {
	return done(null, profile);
}
));
