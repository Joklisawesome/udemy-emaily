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

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.send({
      responseMessage: 'User has succesfully logged out: ',
      user: req.user
    });
  });

  app.get('/auth/current/session', (req, res) => {
    res.send(req.session);
  });

  // test authentication flow with cookies
  app.get('/auth/current/user', (req, res) => {
    res.send(req.user);
  });
};
