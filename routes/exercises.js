var express = require('express');
var router = express.Router();
var exercisesCtrl = require('../controllers/exercises');

router.post('/workouts/:id/exercises', exercisesCtrl.create);
router.delete('/exercises/:id', exercisesCtrl.delete);

module.exports = router;