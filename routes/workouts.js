var express = require('express');
var router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

router.get('/index', workoutsCtrl.index);
router.get('/new', isLoggedIn, workoutsCtrl.new);
router.post('/', workoutsCtrl.create);
router.get('/:id', workoutsCtrl.show);
router.get('/:id/edit', workoutsCtrl.editWorkout);
router.delete('/:id', workoutsCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
