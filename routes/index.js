var express = require('express');
var router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'MyMo' });
});

router.get('/home', indexCtrl.showStats);
router.get('/workouts', indexCtrl.search);

// OAuth Routes
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/home',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})

module.exports = router;
