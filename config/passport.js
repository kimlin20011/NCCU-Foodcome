const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./config');

passport.use(new FacebookStrategy({
    clientID: config.facebookOAuth2.FACEBOOK_APP_ID,
    clientSecret: config.facebookOAuth2.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

module.exports = passport;