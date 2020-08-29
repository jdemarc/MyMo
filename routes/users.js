var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');

router.get('/users/index', isLoggedIn, usersCtrl.index);
router.post('/workouts', isLoggedIn, usersCtrl.addWorkout);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
