var express = require('express');
var router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

//TODO: Add isLoggedIn?

router.get('/index', isLoggedIn, workoutsCtrl.index);
router.get('/new', isLoggedIn, workoutsCtrl.new);
router.post('/', workoutsCtrl.create);
router.put('/:id', workoutsCtrl.update);
router.get('/:id', workoutsCtrl.show);
router.get('/:id/edit', workoutsCtrl.edit);
router.delete('/:id', workoutsCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
