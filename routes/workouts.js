var express = require('express');
var router = express.Router();
var workoutsCtrl = require('../controllers/workouts');

router.get('/new', workoutsCtrl.new);

module.exports = router;
