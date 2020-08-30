var express = require('express');
var router = express.Router();
var exercisesCtrl = require('../controllers/exercises');

router.get('/workouts/:id/exercises/new', exercisesCtrl.new);

module.exports = router;