// base for dealing with OAuth
const passport = require('passport');
// Google strategy -> OAuth 2.0
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
// keys module that stores clientID and secret for Google OAuth 2.0
const keys = require('../config/keys');

const User = mongoose.model('users');

// write cookie with user.id (mongo id -> independend from strategy!)
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// create user from cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      // use a promise
      User.findOne({ googleId: profile.id }).then(existingUser => {
        // we already have a record with the given profile ID
        if (existingUser) {
          console.log(
            'User with profile id: ' +
              existingUser.googleId +
              ' already exists!'
          );
          // null -> everything went fine, existingUser -> we found a user
          done(null, existingUser);
        } else {
          // we don't have a user record with this ID, make a new record
          // new mongoose model instance -> one record
          new User({ googleId: profile.id })
            .save()
            // the instance we get back from mongo after user has been created
            .then(user => done(null, user));
          console.log('GoogleId: ' + profile.id + ' has been saved!');
        }
      });
    }
  )
);
