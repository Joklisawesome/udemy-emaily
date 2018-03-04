const passport = require('passport');

module.exports = app => {
  // route handler
  // if someone visits the route /auth/google we start up the passport google authentication flow
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // this route includes the code coming from google after granting access
  app.get('/auth/google/callback', passport.authenticate('google'));
};
