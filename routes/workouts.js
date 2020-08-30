var express = require('express');
var router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

router.get('/new', isLoggedIn, workoutsCtrl.new);
router.post('/', workoutsCtrl.create);
router.get('/:id', isLoggedIn, workoutsCtrl.show)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
