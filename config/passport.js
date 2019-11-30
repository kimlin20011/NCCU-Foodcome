const passport = require('koa-passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('./config');

passport.use(new FacebookStrategy({
    clientID: config.facebookOAuth2.FACEBOOK_APP_ID.toString(),
    clientSecret: config.facebookOAuth2.FACEBOOK_APP_SECRET.toString(),
    callbackURL: "http://localhost:3001/member/auth/facebook/callback"
},
//將callback結果放到session
    function (accessToken, refreshToken, profile, done) {
        console.log(profile)
        return done(null,profile);
    }
));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(async function (obj, cb) {
    cb(null, obj);
});

module.exports = passport;