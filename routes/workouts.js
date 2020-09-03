var express = require('express');
var router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

//TODO: Add isLoggedIn?

router.get('/index', isLoggedIn, workoutsCtrl.index);
router.get('/new', isLoggedIn, workoutsCtrl.new);
router.get('/', isLoggedIn, workoutsCtrl.search);
router.post('/', isLoggedIn, workoutsCtrl.create);
router.put('/:id', isLoggedIn, workoutsCtrl.update);
router.get('/:id', isLoggedIn, workoutsCtrl.show);
router.get('/:id/edit', isLoggedIn, workoutsCtrl.edit);
router.delete('/:id', isLoggedIn, workoutsCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
