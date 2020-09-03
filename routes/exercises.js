var express = require('express');
var router = express.Router();
var exercisesCtrl = require('../controllers/exercises');

router.post('/workouts/:id/exercises', isLoggedIn, exercisesCtrl.create);
router.delete('/exercises/:id', isLoggedIn, exercisesCtrl.delete);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;