// base for dealing with OAuth
const passport = require('passport');
// Google strategy -> OAuth 2.0
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// keys module that stores clientID and secret for Google OAuth 2.0
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access Token', accessToken);
      console.log('refresh Token', refreshToken);
      console.log('profile', profile);
    }
  )
);
